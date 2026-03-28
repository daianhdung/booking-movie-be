import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/models/user';
import { UserRepositoryPort } from '../../../domain/repositories/user-repository.port';
import { UserPersistenceMapper } from './user.persistence.mapper';
import { UserOrmEntity } from './user.orm-entity';

@Injectable()
export class TypeormUserRepositoryAdapter implements UserRepositoryPort {
  constructor(
    @InjectRepository(UserOrmEntity)
    private readonly userRepository: Repository<UserOrmEntity>,
  ) {}

  async save(user: User): Promise<User> {
    const saved = await this.userRepository.save(UserPersistenceMapper.toOrm(user));
    return UserPersistenceMapper.toDomain(saved);
  }

  async findByEmail(email: string): Promise<User | null> {
    const found = await this.userRepository.findOne({
      where: { email: email.toLowerCase() },
    });
    return found ? UserPersistenceMapper.toDomain(found) : null;
  }

  async findById(id: string): Promise<User | null> {
    const found = await this.userRepository.findOne({
      where: { id },
    });
    return found ? UserPersistenceMapper.toDomain(found) : null;
  }
}