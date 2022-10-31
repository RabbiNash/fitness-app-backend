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
const user_class_1 = require("./user.class");
const user_service_1 = __importDefault(require("./user.service"));
class userController {
    constructor() {
        this.addUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { displayName, email, password, photoURL } = req.body;
            let newUser = new user_class_1.UserClass(displayName, email, password, photoURL);
            try {
                let userResult = yield this.userservice.addUser(newUser);
                return res.json({
                    success: true,
                    user: userResult
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        //get user by id
        this.getUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            // console.log(Id)
            try {
                let userFound = yield this.userservice.getUser(Id);
                if (userFound == null) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was found please provide a valid userId!!"
                    });
                }
                return res.json({
                    success: true,
                    user: userFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.getAllUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let usersFound = yield this.userservice.getAllUsers();
                return res.json({
                    success: true,
                    users: usersFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.upDateUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let userUpdateResults = yield this.userservice.upDateUserRepository(Object.assign({}, req.body));
                console.log(userUpdateResults);
                if (userUpdateResults[0] !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was updated please provide a valid userId !!"
                    });
                }
                return res.json({
                    success: true,
                    msg: "user was successfully updated "
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.deleteUserController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            try {
                let userDeleteResults = yield this.userservice.deleteUserRepository(Id);
                if (userDeleteResults !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was deleted please provide a valid userId !!"
                    });
                }
                return res.json({
                    success: true,
                    msg: "Entry  was successfully deleted  "
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.userservice = new user_service_1.default();
    }
}
exports.default = userController;
