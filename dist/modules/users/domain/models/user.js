"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, passwordHash, fullName, isActive, createdAt, updatedAt) {
        this.id = id;
        this.email = email;
        this.passwordHash = passwordHash;
        this.fullName = fullName;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static createNew(email, passwordHash, fullName) {
        const now = new Date();
        return new User('', email.trim().toLowerCase(), passwordHash, fullName.trim(), true, now, now);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map