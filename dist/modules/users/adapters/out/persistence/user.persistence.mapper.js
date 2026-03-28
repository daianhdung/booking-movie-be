"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPersistenceMapper = void 0;
const user_1 = require("../../../domain/models/user");
const user_orm_entity_1 = require("./user.orm-entity");
class UserPersistenceMapper {
    static toDomain(entity) {
        return new user_1.User(entity.id, entity.email, entity.passwordHash, entity.fullName, entity.isActive, entity.createdAt, entity.updatedAt);
    }
    static toOrm(domain) {
        const entity = new user_orm_entity_1.UserOrmEntity();
        if (domain.id) {
            entity.id = domain.id;
        }
        entity.email = domain.email;
        entity.passwordHash = domain.passwordHash;
        entity.fullName = domain.fullName;
        entity.isActive = domain.isActive;
        entity.createdAt = domain.createdAt;
        entity.updatedAt = domain.updatedAt;
        return entity;
    }
}
exports.UserPersistenceMapper = UserPersistenceMapper;
//# sourceMappingURL=user.persistence.mapper.js.map