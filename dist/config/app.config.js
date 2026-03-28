"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    app: {
        port: Number(process.env.PORT ?? 8081),
        nodeEnv: process.env.NODE_ENV ?? 'development',
    },
});
//# sourceMappingURL=app.config.js.map