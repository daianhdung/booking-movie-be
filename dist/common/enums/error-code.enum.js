"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorCode = void 0;
exports.mapHttpStatusToErrorCode = mapHttpStatusToErrorCode;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["VALIDATION_BOOKING_4000"] = "VALIDATION_BOOKING_4000";
    ErrorCode["UNAUTHORIZED_BOOKING_4010"] = "UNAUTHORIZED_BOOKING_4010";
    ErrorCode["FORBIDDEN_BOOKING_4030"] = "FORBIDDEN_BOOKING_4030";
    ErrorCode["RESOURCE_NOT_FOUND_BOOKING_4040"] = "RESOURCE_NOT_FOUND_BOOKING_4040";
    ErrorCode["CONFLICT_BOOKING_4090"] = "CONFLICT_BOOKING_4090";
    ErrorCode["INTERNAL_BOOKING_5000"] = "INTERNAL_BOOKING_5000";
})(ErrorCode || (exports.ErrorCode = ErrorCode = {}));
function mapHttpStatusToErrorCode(statusCode) {
    switch (statusCode) {
        case 400:
            return ErrorCode.VALIDATION_BOOKING_4000;
        case 401:
            return ErrorCode.UNAUTHORIZED_BOOKING_4010;
        case 403:
            return ErrorCode.FORBIDDEN_BOOKING_4030;
        case 404:
            return ErrorCode.RESOURCE_NOT_FOUND_BOOKING_4040;
        case 409:
            return ErrorCode.CONFLICT_BOOKING_4090;
        default:
            return ErrorCode.INTERNAL_BOOKING_5000;
    }
}
//# sourceMappingURL=error-code.enum.js.map