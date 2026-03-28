import { User } from '../../../domain/models/user';
import { UserOrmEntity } from './user.orm-entity';
export declare class UserPersistenceMapper {
    static toDomain(entity: UserOrmEntity): User;
    static toOrm(domain: User): UserOrmEntity;
}
