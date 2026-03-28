export interface PasswordHasherPort {
    hash(plainText: string): Promise<string>;
    compare(plainText: string, hashedValue: string): Promise<boolean>;
}
export declare const PASSWORD_HASHER: unique symbol;
