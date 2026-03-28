import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BaseRequestDto } from '../../../common/dto/base-request.dto';

export class RegisterDto extends BaseRequestDto {
  @ApiProperty({
    example: 'demo@example.com',
    description: 'Email address used for login',
  })
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    example: 'Password123',
    minLength: 8,
    maxLength: 72,
    description: 'Plain password before hashing',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(72)
  password!: string;

  @ApiProperty({
    example: 'Demo User',
    minLength: 2,
    maxLength: 255,
    description: 'Display name of the user',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  fullName!: string;
}
