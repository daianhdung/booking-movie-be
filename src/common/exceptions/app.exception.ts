import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../enums/error-code.enum';

export class AppException extends HttpException {
  constructor(
    statusCode: HttpStatus,
    errorCode: ErrorCode,
    message: string,
    details?: unknown,
  ) {
    super(
      {
        code: errorCode,
        message,
        details,
      },
      statusCode,
    );
  }
}
