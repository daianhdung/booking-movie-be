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
exports.TypeormUserRepositoryAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_persistence_mapper_1 = require("./user.persistence.mapper");
const user_orm_entity_1 = require("./user.orm-entity");
let TypeormUserRepositoryAdapter = class TypeormUserRepositoryAdapter {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async save(user) {
        const saved = await this.userRepository.save(user_persistence_mapper_1.UserPersistenceMapper.toOrm(user));
        return user_persistence_mapper_1.UserPersistenceMapper.toDomain(saved);
    }
    async findByEmail(email) {
        const found = await this.userRepository.findOne({
            where: { email: email.toLowerCase() },
        });
        return found ? user_persistence_mapper_1.UserPersistenceMapper.toDomain(found) : null;
    }
    async findById(id) {
        const found = await this.userRepository.findOne({
            where: { id },
        });
        return found ? user_persistence_mapper_1.UserPersistenceMapper.toDomain(found) : null;
    }
};
exports.TypeormUserRepositoryAdapter = TypeormUserRepositoryAdapter;
exports.TypeormUserRepositoryAdapter = TypeormUserRepositoryAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_orm_entity_1.UserOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypeormUserRepositoryAdapter);
//# sourceMappingURL=typeorm-user.repository.adapter.js.map