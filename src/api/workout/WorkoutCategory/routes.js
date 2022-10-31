"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workoutCategory_controller_1 = __importDefault(require("./workoutCategory.controller"));
const workoutCategoryRouter = (0, express_1.Router)();
workoutCategoryRouter.post("/", new workoutCategory_controller_1.default().addworkoutCategoryController);
workoutCategoryRouter.get("/:Id", new workoutCategory_controller_1.default().getworkoutCategoryController);
workoutCategoryRouter.get("/", new workoutCategory_controller_1.default().getAllworkoutCategoryController);
workoutCategoryRouter.patch("/", new workoutCategory_controller_1.default().upDateworkoutCategoryController);
workoutCategoryRouter.delete("/:Id", new workoutCategory_controller_1.default().deleteworkoutCategoryController);
exports.default = workoutCategoryRouter;
