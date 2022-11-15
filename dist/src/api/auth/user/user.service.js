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
exports.deleteUserRepository = exports.upDateUserRepository = exports.getAllUsers = exports.getUser = exports.addUser = void 0;
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const usermodel_1 = __importDefault(require("./usermodel"));
const uuid_1 = require("uuid");
const addUser = (userOptions) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield usermodel_1.default.create(Object.assign(Object.assign({}, userOptions), { Id: (0, uuid_1.v4)() }));
    return user;
});
exports.addUser = addUser;
const getUser = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userFound = yield usermodel_1.default.findByPk(Id);
        return userFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUser = getUser;
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usersFound = yield usermodel_1.default.findAll();
        return usersFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllUsers = getAllUsers;
const upDateUserRepository = (updateOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let usersFound = yield usermodel_1.default.update(Object.assign({}, updateOptions), {
            where: {
                Id: updateOptions.Id,
            },
        });
        return usersFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.upDateUserRepository = upDateUserRepository;
const deleteUserRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let deletedUser = yield usermodel_1.default.destroy({
            where: {
                Id: Id,
            },
        });
        return deletedUser;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteUserRepository = deleteUserRepository;
