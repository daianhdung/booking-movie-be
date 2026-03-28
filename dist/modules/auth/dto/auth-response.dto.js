"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileResponseDto = exports.LoginResponseDto = exports.RegisterResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b' }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'demo@example.com' }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Demo User' }),
    __metadata("design:type", String)
], UserInfoDto.prototype, "fullName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserInfoDto.prototype, "isActive", void 0);
class RegisterResponseDto {
}
exports.RegisterResponseDto = RegisterResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ type: UserInfoDto }),
    __metadata("design:type", UserInfoDto)
], RegisterResponseDto.prototype, "user", void 0);
class LoginResponseDto {
}
exports.LoginResponseDto = LoginResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
        description: 'JWT access token',
    }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "access_token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bearer' }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "token_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 86400, description: 'Token lifetime in seconds' }),
    __metadata("design:type", Number)
], LoginResponseDto.prototype, "expires_in", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'profile email' }),
    __metadata("design:type", String)
], LoginResponseDto.prototype, "scope", void 0);
class ProfileResponseDto {
}
exports.ProfileResponseDto = ProfileResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'demo@example.com' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Demo User' }),
    __metadata("design:type", String)
], ProfileResponseDto.prototype, "fullName", void 0);
//# sourceMappingURL=auth-response.dto.js.map