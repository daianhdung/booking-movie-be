import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PasswordHasherPort } from '../../ports/security/password-hasher.port';

@Injectable()
export class BcryptPasswordHasherAdapter implements PasswordHasherPort {
  async hash(plainText: string): Promise<string> {
    return bcrypt.hash(plainText, 10);
  }

  async compare(plainText: string, hashedValue: string): Promise<boolean> {
    return bcrypt.compare(plainText, hashedValue);
  }
}
