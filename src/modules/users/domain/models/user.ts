export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly passwordHash: string,
    public readonly fullName: string,
    public readonly isActive: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static createNew(email: string, passwordHash: string, fullName: string): User {
    const now = new Date();
    return new User(
      '',
      email.trim().toLowerCase(),
      passwordHash,
      fullName.trim(),
      true,
      now,
      now,
    );
  }
}