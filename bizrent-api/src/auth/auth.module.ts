import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        privateKey: Buffer.from(
          process.env.JWT_PRIVATE_KEY || '',
          'base64',
        ).toString('ascii'),
        publicKey: Buffer.from(
          process.env.JWT_PUBLIC_KEY || '',
          'base64',
        ).toString('ascii'),
        signOptions: {
          algorithm: 'RS256',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
