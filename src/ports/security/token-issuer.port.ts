export interface AccessTokenPayload {
  sub: string;
  email: string;
}

export interface TokenIssuerPort {
  signAccessToken(payload: AccessTokenPayload): Promise<string>;
}

export const TOKEN_ISSUER = Symbol('TOKEN_ISSUER');
