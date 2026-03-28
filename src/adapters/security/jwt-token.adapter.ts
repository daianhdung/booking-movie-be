import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  AccessTokenPayload,
  TokenIssuerPort,
} from '../../ports/security/token-issuer.port';

@Injectable()
export class JwtTokenAdapter implements TokenIssuerPort {
  constructor(private readonly jwtService: JwtService) {}

  async signAccessToken(payload: AccessTokenPayload): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
