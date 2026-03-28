import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StringValue } from 'ms';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PASSWORD_HASHER } from '../../ports/security/password-hasher.port';
import { TOKEN_ISSUER } from '../../ports/security/token-issuer.port';
import { BcryptPasswordHasherAdapter } from '../../adapters/security/bcrypt-password-hasher.adapter';
import { JwtTokenAdapter } from '../../adapters/security/jwt-token.adapter';

@Module({
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('jwt.secret'),
        signOptions: {
          expiresIn:
            configService.get<StringValue>('jwt.expiresIn') ?? ('1d' as StringValue),
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: PASSWORD_HASHER,
      useClass: BcryptPasswordHasherAdapter,
    },
    {
      provide: TOKEN_ISSUER,
      useClass: JwtTokenAdapter,
    },
  ],
})
export class AuthModule {}
