"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_service_1 = require("./application/users.service");
const user_repository_port_1 = require("./domain/repositories/user-repository.port");
const typeorm_user_repository_adapter_1 = require("./adapters/out/persistence/typeorm-user.repository.adapter");
const user_orm_entity_1 = require("./adapters/out/persistence/user.orm-entity");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_orm_entity_1.UserOrmEntity])],
        providers: [
            users_service_1.UsersService,
            typeorm_user_repository_adapter_1.TypeormUserRepositoryAdapter,
            {
                provide: user_repository_port_1.USER_REPOSITORY,
                useExisting: typeorm_user_repository_adapter_1.TypeormUserRepositoryAdapter,
            },
        ],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map