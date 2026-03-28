import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AccessTokenPayload } from '../../ports/security/token-issuer.port';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: AccessTokenPayload): AccessTokenPayload;
}
export {};
