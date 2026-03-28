"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1760000000000 = void 0;
class CreateUsersTable1760000000000 {
    constructor() {
        this.name = 'CreateUsersTable1760000000000';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        email varchar(255) NOT NULL,
        password_hash varchar(255) NOT NULL,
        full_name varchar(255) NOT NULL,
        is_active boolean NOT NULL DEFAULT true,
        created_at timestamp NOT NULL DEFAULT now(),
        updated_at timestamp NOT NULL DEFAULT now()
      )
    `);
        await queryRunner.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS uq_users_email ON users (email)
    `);
    }
    async down(queryRunner) {
        await queryRunner.query('DROP INDEX IF EXISTS uq_users_email');
        await queryRunner.query('DROP TABLE IF EXISTS users');
    }
}
exports.CreateUsersTable1760000000000 = CreateUsersTable1760000000000;
//# sourceMappingURL=1760000000000-CreateUsersTable.js.map