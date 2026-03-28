import { User } from '../../../domain/models/user';
import { UserOrmEntity } from './user.orm-entity';

export class UserPersistenceMapper {
  static toDomain(entity: UserOrmEntity): User {
    return new User(
      entity.id,
      entity.email,
      entity.passwordHash,
      entity.fullName,
      entity.isActive,
      entity.createdAt,
      entity.updatedAt,
    );
  }

  static toOrm(domain: User): UserOrmEntity {
    const entity = new UserOrmEntity();
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