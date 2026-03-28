import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseRequestDto } from '../../../common/dto/base-request.dto';

export class LoginDto extends BaseRequestDto {
  @ApiProperty({
    example: 'demo@example.com',
    description: 'Registered account email',
  })
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    example: 'Password123',
    minLength: 8,
    maxLength: 72,
    description: 'Account password',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password!: string;
}
