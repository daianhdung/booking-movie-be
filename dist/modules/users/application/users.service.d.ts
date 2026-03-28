import { User } from '../domain/models/user';
import { UserRepositoryPort } from '../domain/repositories/user-repository.port';
export interface CreateUserParams {
    email: string;
    passwordHash: string;
    fullName: string;
}
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepositoryPort);
    create(params: CreateUserParams): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
