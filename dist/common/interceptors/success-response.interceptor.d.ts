import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
type WrappedSuccessResponse<T> = {
    status: 'SUCCESS';
    data: T;
    error: Record<string, never>;
};
export declare class SuccessResponseInterceptor<T> implements NestInterceptor<T, WrappedSuccessResponse<T>> {
    intercept(_context: ExecutionContext, next: CallHandler<T>): Observable<WrappedSuccessResponse<T>>;
}
export {};
