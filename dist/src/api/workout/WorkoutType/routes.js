"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workoutType_controller_1 = __importDefault(require("./workoutType.controller"));
const workoutTypeRouter = (0, express_1.Router)();
workoutTypeRouter.post("/", new workoutType_controller_1.default().addworkoutTypeController);
workoutTypeRouter.get("/:Id", new workoutType_controller_1.default().getworkoutTypeController);
workoutTypeRouter.get("/", new workoutType_controller_1.default().getAllworkoutTypeController);
workoutTypeRouter.patch("/", new workoutType_controller_1.default().upDateworkoutTypeController);
workoutTypeRouter.delete("/:Id", new workoutType_controller_1.default().deleteworkoutTypeController);
exports.default = workoutTypeRouter;
