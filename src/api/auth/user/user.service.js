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
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const user_model_1 = __importDefault(require("../user/user.model"));
const uuid_1 = require("uuid");
class Userservice {
    constructor() {
        this.addUser = (userOptions) => __awaiter(this, void 0, void 0, function* () {
            let user = yield user_model_1.default.create(Object.assign(Object.assign({}, userOptions), { Id: (0, uuid_1.v4)() }));
            return user;
        });
        this.getUser = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userFound = yield user_model_1.default.findByPk(Id);
                return userFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let usersFound = yield user_model_1.default.findAll();
                return usersFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.upDateUserRepository = (updateOptions) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let usersFound = yield user_model_1.default.update(Object.assign({}, updateOptions), {
                    where: {
                        Id: updateOptions.Id
                    }
                });
                return usersFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.deleteUserRepository = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let deletedUser = yield user_model_1.default.destroy({
                    where: {
                        Id: Id
                    }
                });
                return deletedUser;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Userservice;
