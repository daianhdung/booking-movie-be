import { BaseRequestDto } from '../../../common/dto/base-request.dto';
export declare class RegisterDto extends BaseRequestDto {
    email: string;
    password: string;
    fullName: string;
}
