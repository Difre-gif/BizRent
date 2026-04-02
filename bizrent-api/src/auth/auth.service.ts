import { Injectable, UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { LoginDto, RefreshDto, RegisterDto, RegisterRoleType } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    console.log('Register attempt:', registerDto.email);
    
    const existingUser = await this.prisma.client.users.findUnique({
      where: { email: registerDto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already in use');
    }

    const passwordHash = await bcrypt.hash(registerDto.password, 10);

    try {
      return await this.prisma.client.$transaction(async (tx) => {
      // 1. Create user
      const user = await tx.users.create({
        data: {
          email: registerDto.email,
          full_name: registerDto.full_name,
          password_hash: passwordHash,
        },
      });

      let orgId: string | undefined;
      let role: string | undefined;

      // 2. If LANDLORD, create org and role
      if (registerDto.role_type === RegisterRoleType.LANDLORD) {
        if (!registerDto.organisation_name) {
          throw new BadRequestException('Organisation name is required for landlords');
        }

        const orgSlug = registerDto.organisation_name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)+/g, '');

        const existingOrg = await tx.organisations.findUnique({
          where: { slug: orgSlug },
        });

        // Add random suffix if slug exists to prevent collision
        const finalSlug = existingOrg 
          ? `${orgSlug}-${crypto.randomBytes(2).toString('hex')}`
          : orgSlug;

        const org = await tx.organisations.create({
          data: {
            name: registerDto.organisation_name,
            email: registerDto.email, // using user email as contact email initially
            slug: finalSlug,
          },
        });

        orgId = org.id;
        role = 'OWNER';

        await tx.user_organisation_roles.create({
          data: {
            user_id: user.id,
            org_id: org.id,
            role: 'OWNER',
            status: 'APPROVED',
          },
        });
      } else {
        // TENANT
        role = 'TENANT';
      }

      // 3. Generate tokens
      const tokens = await this.generateTokens(user.id, user.email, orgId, role, tx);

      // 4. Audit Log
      await tx.audit_logs.create({
        data: {
          action: 'REGISTER',
          target_type: 'USER',
          target_id: user.id,
          actor_user_id: user.id,
          actor_role: role as any,
          org_id: orgId,
        },
      });

      return tokens;
    });
    } catch (error: any) {
      console.error('Registration transaction error:', error);
      if (error.code === 'P2002') {
        throw new ConflictException('An account with this email or organisation name already exists.');
      }
      throw error;
    }
  }

  async login(loginDto: LoginDto) {
    // 1. Find user
    const user = await this.prisma.client.users.findUnique({
      where: { email: loginDto.email },
      include: {
        user_organisation_roles: true,
      },
    });

    if (!user || !user.is_active) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 2. Verify password
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password_hash,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // 3. Update last_login_at
    await this.prisma.client.users.update({
      where: { id: user.id },
      data: { last_login_at: new Date() },
    });

    // Determine primary org and role if exists
    const primaryRole = user.user_organisation_roles[0];
    const orgId = primaryRole?.org_id;
    const role = primaryRole?.role;

    // 4. Create tokens
    const tokens = await this.generateTokens(user.id, user.email, orgId, role);

    // 5. Audit Log (System level action so orgId might be null or user's primary org)
    await this.prisma.client.audit_logs.create({
      data: {
        action: 'LOGIN',
        target_type: 'USER',
        target_id: user.id,
        actor_user_id: user.id,
        actor_role: role,
        org_id: orgId,
      },
    });

    return tokens;
  }

  async refresh(refreshDto: RefreshDto) {
    const tokenHash = crypto
      .createHash('sha256')
      .update(refreshDto.refreshToken)
      .digest('hex');

    // Find valid refresh token
    const storedToken = await this.prisma.client.refresh_tokens.findUnique({
      where: { token_hash: tokenHash },
      include: { users: { include: { user_organisation_roles: true } } },
    });

    if (!storedToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (storedToken.revoked_at || storedToken.expires_at < new Date()) {
      // If token was revoked, this is a potential replay attack! Invalidate all tokens for user.
      if (storedToken.revoked_at) {
        await this.prisma.client.refresh_tokens.updateMany({
          where: { user_id: storedToken.user_id },
          data: { revoked_at: new Date() },
        });
      }
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Revoke the current token (rotation)
    await this.prisma.client.refresh_tokens.update({
      where: { id: storedToken.id },
      data: { revoked_at: new Date() },
    });

    const user = storedToken.users;
    const primaryRole = user.user_organisation_roles[0];

    // Generate new pair
    return this.generateTokens(
      user.id,
      user.email,
      primaryRole?.org_id,
      primaryRole?.role,
    );
  }

  private async generateTokens(
    userId: string,
    email: string,
    orgId?: string,
    role?: string,
    tx?: any,
  ) {
    const payload = { sub: userId, email, orgId, role };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });

    // Generate secure random string for refresh token
    const refreshToken = crypto.randomBytes(40).toString('hex');
    const tokenHash = crypto
      .createHash('sha256')
      .update(refreshToken)
      .digest('hex');

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    const prismaClient = tx || this.prisma.client;
    await prismaClient.refresh_tokens.create({
      data: {
        user_id: userId,
        token_hash: tokenHash,
        expires_at: expiresAt,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
