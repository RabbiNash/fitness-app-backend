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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./api/index"));
const pgDb_config_1 = __importDefault(require("./config/pgDb.config"));
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
    connectToDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield pgDb_config_1.default.authenticate();
                yield pgDb_config_1.default.sync({ force: true });
                console.log("database connected successfully !!!");
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    catchError() { }
}
exports.default = new App().express;
