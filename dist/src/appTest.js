"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./api/index"));
class App {
    constructor() {
        this.express = (0, express_1.default)();
        this.setMiddleware();
        this.setRoutes();
        // this.connectToDB();
        this.catchError();
    }
    setMiddleware() {
        this.express.use((0, cors_1.default)());
        this.express.use(express_1.default.json());
        this.express.use((0, morgan_1.default)("dev"));
    }
    setRoutes() {
        this.express.use("/api/v1", index_1.default);
    }
    catchError() { }
}
exports.default = new App().express;
