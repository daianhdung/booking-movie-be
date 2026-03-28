"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppException = void 0;
const common_1 = require("@nestjs/common");
class AppException extends common_1.HttpException {
    constructor(statusCode, errorCode, message, details) {
        super({
            code: errorCode,
            message,
            details,
        }, statusCode);
    }
}
exports.AppException = AppException;
//# sourceMappingURL=app.exception.js.map