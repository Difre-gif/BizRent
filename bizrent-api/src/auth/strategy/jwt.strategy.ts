import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { requestContext } from '../auth.context';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: Buffer.from(
        process.env.JWT_PUBLIC_KEY || '',
        'base64',
      ).toString('ascii'),
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    if (!payload || !payload.sub) {
      throw new UnauthorizedException();
    }

    // We can extract orgId and role from payload if embedded
    return {
      userId: payload.sub,
      email: payload.email,
      orgId: payload.orgId,
      role: payload.role,
    };
  }
}
