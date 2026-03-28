import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class BaseRequestDto {
  @ApiPropertyOptional({
    example: 'req-9f3ce4d4-7f53-4f6a-bd1d-f1d28d17dd70',
    description: 'Optional client-generated id for tracing a request',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  requestId?: string;
}
