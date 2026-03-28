import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserOrmEntity } from '../modules/users/adapters/out/persistence/user.orm-entity';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? 'localhost',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME ?? 'postgres',
  password: process.env.DB_PASSWORD ?? 'postgres',
  database: process.env.DB_NAME ?? 'booking_db',
  entities: [UserOrmEntity],
});
