"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test',
    password: 'test',
    database: 'test',
    synchronize: false,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "database/migrations/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "database/migrations",
        "subscribersDir": "src/subscriber"
    }
};
//# sourceMappingURL=ormconfig.js.map