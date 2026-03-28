export interface AccessTokenPayload {
    sub: string;
    email: string;
}
export interface TokenIssuerPort {
    signAccessToken(payload: AccessTokenPayload): Promise<string>;
}
export declare const TOKEN_ISSUER: unique symbol;
