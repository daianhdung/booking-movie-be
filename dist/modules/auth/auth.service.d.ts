import { ConfigService } from '@nestjs/config';
import { PasswordHasherPort } from '../../ports/security/password-hasher.port';
import { TokenIssuerPort } from '../../ports/security/token-issuer.port';
import { UsersService } from '../users/application/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto, RegisterResponseDto } from './dto/auth-response.dto';
import { User } from '../users/domain/models/user';
export declare class AuthService {
    private readonly usersService;
    private readonly configService;
    private readonly passwordHasher;
    private readonly tokenIssuer;
    constructor(usersService: UsersService, configService: ConfigService, passwordHasher: PasswordHasherPort, tokenIssuer: TokenIssuerPort);
    register(payload: RegisterDto): Promise<RegisterResponseDto>;
    login(payload: LoginDto): Promise<LoginResponseDto>;
    getProfile(userId: string): Promise<Pick<User, 'id' | 'email' | 'fullName'>>;
    private buildLoginResponse;
    private toSeconds;
}
