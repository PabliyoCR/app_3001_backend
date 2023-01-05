"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        postgres: {
            database: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.POSTGRES_PASSWORD,
            username: process.env.POSTGRES_USER,
            host: process.env.POSTGRES_HOST,
        },
        apiKey: process.env.API_KEY,
        jwtSecret: process.env.JWT_SECRET,
    };
});
//# sourceMappingURL=config.js.map