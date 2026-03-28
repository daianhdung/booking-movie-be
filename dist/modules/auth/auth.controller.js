"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const auth_service_1 = require("./auth.service");
const login_dto_1 = require("./dto/login.dto");
const register_dto_1 = require("./dto/register.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(payload) {
        return this.authService.register(payload);
    }
    login(payload) {
        return this.authService.login(payload);
    }
    profile(currentUser) {
        return this.authService.getProfile(currentUser.sub);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({
        summary: 'Register a new account',
        description: 'Creates a user account and immediately returns an access token.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Registration successful',
        schema: {
            example: {
                status: 'SUCCESS',
                data: {
                    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
                    tokenType: 'Bearer',
                    expiresIn: '1d',
                    user: {
                        id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
                        email: 'demo@example.com',
                        fullName: 'Demo User',
                    },
                },
                error: {},
            },
        },
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Invalid input payload',
        schema: {
            example: {
                status: 'ERROR',
                data: {},
                error: {
                    code: 'VALIDATION_BOOKING_4000',
                    message: ['email must be an email'],
                },
            },
        },
    }),
    (0, swagger_1.ApiConflictResponse)({
        description: 'Email already exists',
        schema: {
            example: {
                status: 'ERROR',
                data: {},
                error: {
                    code: 'CONFLICT_BOOKING_4090',
                    message: 'Email already exists',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({
        summary: 'Login with email and password',
        description: 'Validates credentials and returns an access token.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Login successful',
        schema: {
            example: {
                status: 'SUCCESS',
                data: {
                    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
                    tokenType: 'Bearer',
                    expiresIn: '1d',
                    user: {
                        id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
                        email: 'demo@example.com',
                        fullName: 'Demo User',
                    },
                },
                error: {},
            },
        },
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Invalid input payload',
        schema: {
            example: {
                status: 'ERROR',
                data: {},
                error: {
                    code: 'VALIDATION_BOOKING_4000',
                    message: ['password must be longer than or equal to 8 characters'],
                },
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Invalid credentials',
        schema: {
            example: {
                status: 'ERROR',
                data: {},
                error: {
                    code: 'UNAUTHORIZED_BOOKING_4010',
                    message: 'Invalid email or password',
                },
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('profile'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get current profile',
        description: 'Returns profile data from the access token subject.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Profile fetched successfully',
        schema: {
            example: {
                status: 'SUCCESS',
                data: {
                    id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
                    email: 'demo@example.com',
                    fullName: 'Demo User',
                },
                error: {},
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'Missing or invalid JWT token',
        schema: {
            example: {
                status: 'ERROR',
                data: {},
                error: {
                    code: 'UNAUTHORIZED_BOOKING_4010',
                    message: 'Unauthorized',
                },
            },
        },
    }),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "profile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    (0, swagger_1.ApiTags)('Auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map