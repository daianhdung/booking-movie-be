declare class UserInfoDto {
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
}
export declare class RegisterResponseDto {
    user: UserInfoDto;
}
export declare class LoginResponseDto {
    access_token: string;
    token_type: 'Bearer';
    expires_in: number;
    scope: string;
}
export declare class ProfileResponseDto {
    id: string;
    email: string;
    fullName: string;
}
export {};
