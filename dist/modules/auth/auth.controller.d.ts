import { CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ProfileResponseDto } from './dto/auth-response.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(payload: RegisterDto): Promise<import("./dto/auth-response.dto").RegisterResponseDto>;
    login(payload: LoginDto): Promise<import("./dto/auth-response.dto").LoginResponseDto>;
    profile(currentUser: CurrentUserPayload): Promise<ProfileResponseDto>;
}
