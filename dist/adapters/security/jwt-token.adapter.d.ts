import { JwtService } from '@nestjs/jwt';
import { AccessTokenPayload, TokenIssuerPort } from '../../ports/security/token-issuer.port';
export declare class JwtTokenAdapter implements TokenIssuerPort {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    signAccessToken(payload: AccessTokenPayload): Promise<string>;
}
