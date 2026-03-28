import { ApiProperty } from '@nestjs/swagger';
import { ErrorCode } from '../enums/error-code.enum';

export class BaseErrorDto {
  @ApiProperty({ example: ErrorCode.UNAUTHORIZED_BOOKING_4010 })
  code!: ErrorCode | string;

  @ApiProperty({
    example: 'Invalid email or password',
    description: 'Can be string or list of validation messages',
  })
  message!: string | string[];
}

export class BaseSuccessResponseDto<T = unknown> {
  @ApiProperty({ example: 'SUCCESS' })
  status!: 'SUCCESS';

  @ApiProperty({ type: Object })
  data!: T;

  @ApiProperty({ example: {} })
  error!: Record<string, never>;
}

export class BaseErrorResponseDto {
  @ApiProperty({ example: 'ERROR' })
  status!: 'ERROR';

  @ApiProperty({ example: {} })
  data!: Record<string, never>;

  @ApiProperty({ type: BaseErrorDto })
  error!: BaseErrorDto;
}
