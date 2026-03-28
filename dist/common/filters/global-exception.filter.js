"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const error_code_enum_1 = require("../enums/error-code.enum");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const statusCode = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const body = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : undefined;
        const message = this.extractMessage(body, exception);
        const errorCode = this.extractErrorCode(body, statusCode);
        response.status(statusCode).json({
            status: 'ERROR',
            data: {},
            error: {
                code: errorCode,
                message,
            },
        });
    }
    extractMessage(body, exception) {
        if (typeof body === 'string') {
            return body;
        }
        if (body?.message) {
            return body.message;
        }
        if (exception instanceof Error) {
            return exception.message;
        }
        return 'Internal server error';
    }
    extractErrorCode(body, statusCode) {
        if (body && typeof body !== 'string' && body.code) {
            return body.code;
        }
        return (0, error_code_enum_1.mapHttpStatusToErrorCode)(statusCode);
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
//# sourceMappingURL=global-exception.filter.js.map