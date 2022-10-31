"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = __importDefault(require("./WorkoutCategory/routes"));
const routes_2 = __importDefault(require("./WorkoutType/routes"));
const routes_3 = __importDefault(require("./Excercise/routes"));
const router = (0, express_1.Router)();
router.use("/category", routes_1.default);
router.use("/type", routes_2.default);
router.use("/exercise", routes_3.default);
exports.default = router;
