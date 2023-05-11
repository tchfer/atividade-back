"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entity/Post");
const Category_1 = require("./entity/Category");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    const category1 = new Category_1.Category();
    category1.name = "TypeScript";
    yield data_source_1.AppDataSource.manager.save(category1);
    const category2 = new Category_1.Category();
    category2.name = "Programming";
    yield data_source_1.AppDataSource.manager.save(category2);
    const post = new Post_1.Post();
    post.title = "TypeScript";
    post.text = `TypeScript is Awesome!`;
    post.categories = [category1, category2];
    yield data_source_1.AppDataSource.manager.save(post);
    console.log("Post has been saved: ", post);
}))
    .catch((error) => console.log("Error: ", error));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
require("dotenv").config();
const config = {
    "type": process.env.DB_DIALECT,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
        "./src/entity/*"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
};
const app = (0, express_1.default)();
(0, typeorm_1.createConnection)(config);
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(routes_1.default);
app.listen(process.env.PORT || 3333, () => {
    console.log('Servidor em Execução');
});
//# sourceMappingURL=index.js.map