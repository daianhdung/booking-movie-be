"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_config_1 = __importDefault(require("./config/app.config"));
const database_config_1 = __importDefault(require("./config/database.config"));
const jwt_config_1 = __importDefault(require("./config/jwt.config"));
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const movies_module_1 = require("./modules/movies/movies.module");
const showtimes_module_1 = require("./modules/showtimes/showtimes.module");
const seats_module_1 = require("./modules/seats/seats.module");
const seat_holds_module_1 = require("./modules/seat-holds/seat-holds.module");
const bookings_module_1 = require("./modules/bookings/bookings.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [app_config_1.default, database_config_1.default, jwt_config_1.default],
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.getOrThrow('database.host'),
                    port: configService.getOrThrow('database.port'),
                    username: configService.getOrThrow('database.username'),
                    password: configService.getOrThrow('database.password'),
                    database: configService.getOrThrow('database.name'),
                    autoLoadEntities: true,
                    synchronize: configService.get('database.sync', false),
                    logging: configService.get('database.logging', false),
                }),
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            movies_module_1.MoviesModule,
            showtimes_module_1.ShowtimesModule,
            seats_module_1.SeatsModule,
            seat_holds_module_1.SeatHoldsModule,
            bookings_module_1.BookingsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map