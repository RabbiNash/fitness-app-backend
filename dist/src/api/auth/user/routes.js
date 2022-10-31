"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.post("/", new user_controller_1.default().addUserController);
userRouter.get("/:Id", new user_controller_1.default().getUserController);
userRouter.get("/", new user_controller_1.default().getAllUserController);
userRouter.patch("/", new user_controller_1.default().upDateUserController);
userRouter.delete("/:Id", new user_controller_1.default().deleteUserController);
exports.default = userRouter;
