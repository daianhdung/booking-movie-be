import { Repository } from 'typeorm';
import { User } from '../../../domain/models/user';
import { UserRepositoryPort } from '../../../domain/repositories/user-repository.port';
import { UserOrmEntity } from './user.orm-entity';
export declare class TypeormUserRepositoryAdapter implements UserRepositoryPort {
    private readonly userRepository;
    constructor(userRepository: Repository<UserOrmEntity>);
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
