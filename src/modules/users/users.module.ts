import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './application/users.service';
import { USER_REPOSITORY } from './domain/repositories/user-repository.port';
import { TypeormUserRepositoryAdapter } from './adapters/out/persistence/typeorm-user.repository.adapter';
import { UserOrmEntity } from './adapters/out/persistence/user.orm-entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  providers: [
    UsersService,
    TypeormUserRepositoryAdapter,
    {
      provide: USER_REPOSITORY,
      useExisting: TypeormUserRepositoryAdapter,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
