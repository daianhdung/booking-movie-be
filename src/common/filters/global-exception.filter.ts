import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import {
  ErrorCode,
  mapHttpStatusToErrorCode,
} from '../enums/error-code.enum';

type ExceptionBody = {
  message?: string | string[];
  error?: string;
  code?: ErrorCode | string;
};

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const body =
      exception instanceof HttpException
        ? (exception.getResponse() as string | ExceptionBody)
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

  private extractMessage(
    body: string | ExceptionBody | undefined,
    exception: unknown,
  ): string | string[] {
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

  private extractErrorCode(
    body: string | ExceptionBody | undefined,
    statusCode: number,
  ): ErrorCode | string {
    if (body && typeof body !== 'string' && body.code) {
      return body.code;
    }

    return mapHttpStatusToErrorCode(statusCode);
  }
}
