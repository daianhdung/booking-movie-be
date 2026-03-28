import {
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  PASSWORD_HASHER,
  PasswordHasherPort,
} from '../../ports/security/password-hasher.port';
import {
  TOKEN_ISSUER,
  TokenIssuerPort,
} from '../../ports/security/token-issuer.port';
import { UsersService } from '../users/application/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto, RegisterResponseDto } from './dto/auth-response.dto';
import { User } from '../users/domain/models/user';
import { AppException } from '../../common/exceptions/app.exception';
import { ErrorCode } from '../../common/enums/error-code.enum';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    @Inject(PASSWORD_HASHER)
    private readonly passwordHasher: PasswordHasherPort,
    @Inject(TOKEN_ISSUER)
    private readonly tokenIssuer: TokenIssuerPort,
  ) {}

  async register(payload: RegisterDto): Promise<RegisterResponseDto> {
    const existedUser = await this.usersService.findByEmail(payload.email);
    if (existedUser) {
      throw new AppException(
        HttpStatus.CONFLICT,
        ErrorCode.CONFLICT_BOOKING_4090,
        'Email already exists',
      );
    }

    const passwordHash = await this.passwordHasher.hash(payload.password);
    const user = await this.usersService.create({
      email: payload.email,
      passwordHash,
      fullName: payload.fullName,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        isActive: user.isActive,
      },
    };
  }

  async login(payload: LoginDto): Promise<LoginResponseDto> {
    const user = await this.usersService.findByEmail(payload.email);

    if (!user || !user.isActive) {
      throw new AppException(
        HttpStatus.UNAUTHORIZED,
        ErrorCode.UNAUTHORIZED_BOOKING_4010,
        'Invalid email or password',
      );
    }

    const matched = await this.passwordHasher.compare(
      payload.password,
      user.passwordHash,
    );

    if (!matched) {
      throw new AppException(
        HttpStatus.UNAUTHORIZED,
        ErrorCode.UNAUTHORIZED_BOOKING_4010,
        'Invalid email or password',
      );
    }

    return this.buildLoginResponse(user);
  }

  async getProfile(userId: string): Promise<Pick<User, 'id' | 'email' | 'fullName'>> {
    const user = await this.usersService.findById(userId);
    if (!user) {
      throw new AppException(
        HttpStatus.UNAUTHORIZED,
        ErrorCode.UNAUTHORIZED_BOOKING_4010,
        'User not found',
      );
    }

    return {
      id: user.id,
      email: user.email,
      fullName: user.fullName,
    };
  }

  private async buildLoginResponse(user: User): Promise<LoginResponseDto> {
    const accessToken = await this.tokenIssuer.signAccessToken({
      sub: user.id,
      email: user.email,
    });
    const expiresInConfig = this.configService.get<string>('jwt.expiresIn', '1d');

    return {
      access_token: accessToken,
      token_type: 'Bearer',
      expires_in: this.toSeconds(expiresInConfig),
      scope: 'profile email',
    };
  }

  private toSeconds(value: string): number {
    const numericValue = Number(value);
    if (!Number.isNaN(numericValue)) {
      return numericValue;
    }

    const match = value.trim().match(/^(\d+)([smhd])$/i);
    if (!match) {
      return 86400;
    }

    const amount = Number(match[1]);
    const unit = match[2].toLowerCase();

    switch (unit) {
      case 's':
        return amount;
      case 'm':
        return amount * 60;
      case 'h':
        return amount * 3600;
      case 'd':
        return amount * 86400;
      default:
        return 86400;
    }
  }
}
