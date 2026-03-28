import { User } from '../models/user';
export interface UserRepositoryPort {
    save(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
export declare const USER_REPOSITORY: unique symbol;
