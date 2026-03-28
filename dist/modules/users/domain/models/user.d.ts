export declare class User {
    readonly id: string;
    readonly email: string;
    readonly passwordHash: string;
    readonly fullName: string;
    readonly isActive: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(id: string, email: string, passwordHash: string, fullName: string, isActive: boolean, createdAt: Date, updatedAt: Date);
    static createNew(email: string, passwordHash: string, fullName: string): User;
}
