"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    database: {
        host: process.env.DB_HOST ?? 'localhost',
        port: Number(process.env.DB_PORT ?? 5432),
        name: process.env.DB_NAME ?? 'booking_db',
        username: process.env.DB_USERNAME ?? 'postgres',
        password: process.env.DB_PASSWORD ?? 'postgres',
        sync: (process.env.DB_SYNC ?? 'false') === 'true',
        logging: (process.env.DB_LOGGING ?? 'false') === 'true',
    },
});
//# sourceMappingURL=database.config.js.map