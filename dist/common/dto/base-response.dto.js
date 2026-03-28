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
exports.BaseErrorResponseDto = exports.BaseSuccessResponseDto = exports.BaseErrorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const error_code_enum_1 = require("../enums/error-code.enum");
class BaseErrorDto {
}
exports.BaseErrorDto = BaseErrorDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: error_code_enum_1.ErrorCode.UNAUTHORIZED_BOOKING_4010 }),
    __metadata("design:type", String)
], BaseErrorDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Invalid email or password',
        description: 'Can be string or list of validation messages',
    }),
    __metadata("design:type", Object)
], BaseErrorDto.prototype, "message", void 0);
class BaseSuccessResponseDto {
}
exports.BaseSuccessResponseDto = BaseSuccessResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'SUCCESS' }),
    __metadata("design:type", String)
], BaseSuccessResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Object }),
    __metadata("design:type", Object)
], BaseSuccessResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {} }),
    __metadata("design:type", Object)
], BaseSuccessResponseDto.prototype, "error", void 0);
class BaseErrorResponseDto {
}
exports.BaseErrorResponseDto = BaseErrorResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ERROR' }),
    __metadata("design:type", String)
], BaseErrorResponseDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: {} }),
    __metadata("design:type", Object)
], BaseErrorResponseDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: BaseErrorDto }),
    __metadata("design:type", BaseErrorDto)
], BaseErrorResponseDto.prototype, "error", void 0);
//# sourceMappingURL=base-response.dto.js.map