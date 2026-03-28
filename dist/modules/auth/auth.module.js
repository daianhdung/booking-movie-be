"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const users_module_1 = require("../users/users.module");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const jwt_strategy_1 = require("./jwt.strategy");
const password_hasher_port_1 = require("../../ports/security/password-hasher.port");
const token_issuer_port_1 = require("../../ports/security/token-issuer.port");
const bcrypt_password_hasher_adapter_1 = require("../../adapters/security/bcrypt-password-hasher.adapter");
const jwt_token_adapter_1 = require("../../adapters/security/jwt-token.adapter");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    secret: configService.getOrThrow('jwt.secret'),
                    signOptions: {
                        expiresIn: configService.get('jwt.expiresIn') ?? '1d',
                    },
                }),
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            {
                provide: password_hasher_port_1.PASSWORD_HASHER,
                useClass: bcrypt_password_hasher_adapter_1.BcryptPasswordHasherAdapter,
            },
            {
                provide: token_issuer_port_1.TOKEN_ISSUER,
                useClass: jwt_token_adapter_1.JwtTokenAdapter,
            },
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map