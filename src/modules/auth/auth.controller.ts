import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CurrentUser, CurrentUserPayload } from '../../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ProfileResponseDto } from './dto/auth-response.dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ApiOperation({
    summary: 'Register a new account',
    description: 'Creates a user account and immediately returns an access token.',
  })
  @ApiOkResponse({
    description: 'Registration successful',
    schema: {
      example: {
        status: 'SUCCESS',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
          tokenType: 'Bearer',
          expiresIn: '1d',
          user: {
            id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
            email: 'demo@example.com',
            fullName: 'Demo User',
          },
        },
        error: {},
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input payload',
    schema: {
      example: {
        status: 'ERROR',
        data: {},
        error: {
          code: 'VALIDATION_BOOKING_4000',
          message: ['email must be an email'],
        },
      },
    },
  })
  @ApiConflictResponse({
    description: 'Email already exists',
    schema: {
      example: {
        status: 'ERROR',
        data: {},
        error: {
          code: 'CONFLICT_BOOKING_4090',
          message: 'Email already exists',
        },
      },
    },
  })
  register(@Body() payload: RegisterDto) {
    return this.authService.register(payload);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login with email and password',
    description: 'Validates credentials and returns an access token.',
  })
  @ApiOkResponse({
    description: 'Login successful',
    schema: {
      example: {
        status: 'SUCCESS',
        data: {
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo.signature',
          tokenType: 'Bearer',
          expiresIn: '1d',
          user: {
            id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
            email: 'demo@example.com',
            fullName: 'Demo User',
          },
        },
        error: {},
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input payload',
    schema: {
      example: {
        status: 'ERROR',
        data: {},
        error: {
          code: 'VALIDATION_BOOKING_4000',
          message: ['password must be longer than or equal to 8 characters'],
        },
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Invalid credentials',
    schema: {
      example: {
        status: 'ERROR',
        data: {},
        error: {
          code: 'UNAUTHORIZED_BOOKING_4010',
          message: 'Invalid email or password',
        },
      },
    },
  })
  login(@Body() payload: LoginDto) {
    return this.authService.login(payload);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get current profile',
    description: 'Returns profile data from the access token subject.',
  })
  @ApiOkResponse({
    description: 'Profile fetched successfully',
    schema: {
      example: {
        status: 'SUCCESS',
        data: {
          id: '2f6de78a-6d83-4a93-a1a9-29e6a6428e0b',
          email: 'demo@example.com',
          fullName: 'Demo User',
        },
        error: {},
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: 'Missing or invalid JWT token',
    schema: {
      example: {
        status: 'ERROR',
        data: {},
        error: {
          code: 'UNAUTHORIZED_BOOKING_4010',
          message: 'Unauthorized',
        },
      },
    },
  })
  profile(@CurrentUser() currentUser: CurrentUserPayload): Promise<ProfileResponseDto> {
    return this.authService.getProfile(currentUser.sub);
  }
}
