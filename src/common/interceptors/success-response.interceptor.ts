import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

type WrappedSuccessResponse<T> = {
  status: 'SUCCESS';
  data: T;
  error: Record<string, never>;
};

@Injectable()
export class SuccessResponseInterceptor<T>
  implements NestInterceptor<T, WrappedSuccessResponse<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<WrappedSuccessResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        status: 'SUCCESS',
        data,
        error: {},
      })),
    );
  }
}
