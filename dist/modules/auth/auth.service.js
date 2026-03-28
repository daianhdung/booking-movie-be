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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const password_hasher_port_1 = require("../../ports/security/password-hasher.port");
const token_issuer_port_1 = require("../../ports/security/token-issuer.port");
const users_service_1 = require("../users/application/users.service");
const app_exception_1 = require("../../common/exceptions/app.exception");
const error_code_enum_1 = require("../../common/enums/error-code.enum");
let AuthService = class AuthService {
    constructor(usersService, configService, passwordHasher, tokenIssuer) {
        this.usersService = usersService;
        this.configService = configService;
        this.passwordHasher = passwordHasher;
        this.tokenIssuer = tokenIssuer;
    }
    async register(payload) {
        const existedUser = await this.usersService.findByEmail(payload.email);
        if (existedUser) {
            throw new app_exception_1.AppException(common_1.HttpStatus.CONFLICT, error_code_enum_1.ErrorCode.CONFLICT_BOOKING_4090, 'Email already exists');
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
    async login(payload) {
        const user = await this.usersService.findByEmail(payload.email);
        if (!user || !user.isActive) {
            throw new app_exception_1.AppException(common_1.HttpStatus.UNAUTHORIZED, error_code_enum_1.ErrorCode.UNAUTHORIZED_BOOKING_4010, 'Invalid email or password');
        }
        const matched = await this.passwordHasher.compare(payload.password, user.passwordHash);
        if (!matched) {
            throw new app_exception_1.AppException(common_1.HttpStatus.UNAUTHORIZED, error_code_enum_1.ErrorCode.UNAUTHORIZED_BOOKING_4010, 'Invalid email or password');
        }
        return this.buildLoginResponse(user);
    }
    async getProfile(userId) {
        const user = await this.usersService.findById(userId);
        if (!user) {
            throw new app_exception_1.AppException(common_1.HttpStatus.UNAUTHORIZED, error_code_enum_1.ErrorCode.UNAUTHORIZED_BOOKING_4010, 'User not found');
        }
        return {
            id: user.id,
            email: user.email,
            fullName: user.fullName,
        };
    }
    async buildLoginResponse(user) {
        const accessToken = await this.tokenIssuer.signAccessToken({
            sub: user.id,
            email: user.email,
        });
        const expiresInConfig = this.configService.get('jwt.expiresIn', '1d');
        return {
            access_token: accessToken,
            token_type: 'Bearer',
            expires_in: this.toSeconds(expiresInConfig),
            scope: 'profile email',
        };
    }
    toSeconds(value) {
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(password_hasher_port_1.PASSWORD_HASHER)),
    __param(3, (0, common_1.Inject)(token_issuer_port_1.TOKEN_ISSUER)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        config_1.ConfigService, Object, Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map