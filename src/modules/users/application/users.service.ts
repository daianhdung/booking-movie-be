import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/models/user';
import {
  USER_REPOSITORY,
  UserRepositoryPort,
} from '../domain/repositories/user-repository.port';

export interface CreateUserParams {
  email: string;
  passwordHash: string;
  fullName: string;
}

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepositoryPort,
  ) {}

  async create(params: CreateUserParams): Promise<User> {
    const user = User.createNew(
      params.email,
      params.passwordHash,
      params.fullName,
    );
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }

  async findById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }
}
