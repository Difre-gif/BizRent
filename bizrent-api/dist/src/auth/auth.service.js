"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const crypto = __importStar(require("crypto"));
const auth_dto_1 = require("./dto/auth.dto");
let AuthService = class AuthService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        const existingUser = await this.prisma.client.users.findUnique({
            where: { email: registerDto.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Email already in use');
        }
        const passwordHash = await bcrypt.hash(registerDto.password, 10);
        return this.prisma.client.$transaction(async (tx) => {
            const user = await tx.users.create({
                data: {
                    email: registerDto.email,
                    full_name: registerDto.full_name,
                    password_hash: passwordHash,
                },
            });
            let orgId;
            let role;
            if (registerDto.role_type === auth_dto_1.RegisterRoleType.LANDLORD) {
                if (!registerDto.organisation_name) {
                    throw new common_1.BadRequestException('Organisation name is required for landlords');
                }
                const orgSlug = registerDto.organisation_name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)+/g, '');
                const existingOrg = await tx.organisations.findUnique({
                    where: { slug: orgSlug },
                });
                const finalSlug = existingOrg
                    ? `${orgSlug}-${crypto.randomBytes(2).toString('hex')}`
                    : orgSlug;
                const org = await tx.organisations.create({
                    data: {
                        name: registerDto.organisation_name,
                        email: registerDto.email,
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
            }
            else {
                role = 'TENANT';
            }
            const tokens = await this.generateTokens(user.id, user.email, orgId, role);
            await tx.audit_logs.create({
                data: {
                    action: 'REGISTER',
                    target_type: 'USER',
                    target_id: user.id,
                    actor_user_id: user.id,
                    actor_role: role,
                    org_id: orgId,
                },
            });
            return tokens;
        });
    }
    async login(loginDto) {
        const user = await this.prisma.client.users.findUnique({
            where: { email: loginDto.email },
            include: {
                user_organisation_roles: true,
            },
        });
        if (!user || !user.is_active) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password_hash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        await this.prisma.client.users.update({
            where: { id: user.id },
            data: { last_login_at: new Date() },
        });
        const primaryRole = user.user_organisation_roles[0];
        const orgId = primaryRole?.org_id;
        const role = primaryRole?.role;
        const tokens = await this.generateTokens(user.id, user.email, orgId, role);
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
    async refresh(refreshDto) {
        const tokenHash = crypto
            .createHash('sha256')
            .update(refreshDto.refreshToken)
            .digest('hex');
        const storedToken = await this.prisma.client.refresh_tokens.findUnique({
            where: { token_hash: tokenHash },
            include: { users: { include: { user_organisation_roles: true } } },
        });
        if (!storedToken) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        if (storedToken.revoked_at || storedToken.expires_at < new Date()) {
            if (storedToken.revoked_at) {
                await this.prisma.client.refresh_tokens.updateMany({
                    where: { user_id: storedToken.user_id },
                    data: { revoked_at: new Date() },
                });
            }
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        await this.prisma.client.refresh_tokens.update({
            where: { id: storedToken.id },
            data: { revoked_at: new Date() },
        });
        const user = storedToken.users;
        const primaryRole = user.user_organisation_roles[0];
        return this.generateTokens(user.id, user.email, primaryRole?.org_id, primaryRole?.role);
    }
    async generateTokens(userId, email, orgId, role) {
        const payload = { sub: userId, email, orgId, role };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
        const refreshToken = crypto.randomBytes(40).toString('hex');
        const tokenHash = crypto
            .createHash('sha256')
            .update(refreshToken)
            .digest('hex');
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        await this.prisma.client.refresh_tokens.create({
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map