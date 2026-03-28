import { PasswordHasherPort } from '../../ports/security/password-hasher.port';
export declare class BcryptPasswordHasherAdapter implements PasswordHasherPort {
    hash(plainText: string): Promise<string>;
    compare(plainText: string, hashedValue: string): Promise<boolean>;
}
