import { ErrorCode } from '../enums/error-code.enum';
export declare class BaseErrorDto {
    code: ErrorCode | string;
    message: string | string[];
}
export declare class BaseSuccessResponseDto<T = unknown> {
    status: 'SUCCESS';
    data: T;
    error: Record<string, never>;
}
export declare class BaseErrorResponseDto {
    status: 'ERROR';
    data: Record<string, never>;
    error: BaseErrorDto;
}
