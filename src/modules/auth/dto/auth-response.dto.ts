import { ApiProperty } from '@nestjs/swagger';

class UserInfoDto {
  @ApiProperty({ example: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b' })
  id!: string;

  @ApiProperty({ example: 'demo@example.com' })
  email!: string;

  @ApiProperty({ example: 'Demo User' })
  fullName!: string;

  @ApiProperty({ example: true })
  isActive!: boolean;
}

export class RegisterResponseDto {
  @ApiProperty({ type: UserInfoDto })
  user!: UserInfoDto;
}

export class LoginResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
    description: 'JWT access token',
  })
  access_token!: string;

  @ApiProperty({ example: 'Bearer' })
  token_type!: 'Bearer';

  @ApiProperty({ example: 86400, description: 'Token lifetime in seconds' })
  expires_in!: number;

  @ApiProperty({ example: 'profile email' })
  scope!: string;
}

export class ProfileResponseDto {
  @ApiProperty({ example: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b' })
  id!: string;

  @ApiProperty({ example: 'demo@example.com' })
  email!: string;

  @ApiProperty({ example: 'Demo User' })
  fullName!: string;
}
