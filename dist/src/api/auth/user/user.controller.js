"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.upDateUserController = exports.getAllUserController = exports.getUserController = exports.addUserController = void 0;
const user_class_1 = require("./user.class");
const Userservice = __importStar(require("./user.service"));
const addUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { displayName, email, password, photoURL } = req.body;
    let newUser = new user_class_1.UserClass(displayName, email, password, photoURL);
    try {
        let userResult = yield Userservice.addUser(newUser);
        return res.json({
            success: true,
            user: userResult,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.addUserController = addUserController;
//get user by id
const getUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    // console.log(Id)
    try {
        let userFound = yield Userservice.getUser(Id);
        if (userFound == null) {
            return res.status(400).json({
                success: false,
                msg: "No entry was found please provide a valid userId!!",
            });
        }
        return res.json({
            success: true,
            user: userFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getUserController = getUserController;
const getAllUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let usersFound = yield Userservice.getAllUsers();
        return res.json({
            success: true,
            users: usersFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getAllUserController = getAllUserController;
const upDateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let userUpdateResults = yield Userservice.upDateUserRepository(Object.assign({}, req.body));
        console.log(userUpdateResults);
        if (userUpdateResults[0] !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was updated please provide a valid userId !!",
            });
        }
        return res.json({
            success: true,
            msg: "user was successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.upDateUserController = upDateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let userDeleteResults = yield Userservice.deleteUserRepository(Id);
        if (userDeleteResults !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was deleted please provide a valid userId !!",
            });
        }
        return res.json({
            success: true,
            msg: "Entry  was successfully deleted  ",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.deleteUserController = deleteUserController;
