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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exerciseController = exports.ExerciseClass = exports.exercisePayload = exports.exerciseInput = exports.request = exports.User = exports.exerciseInstance = exports.userInput = exports.userPayLoad = exports.app = void 0;
const supertest_1 = __importDefault(require("supertest"));
exports.request = supertest_1.default;
const user_class_1 = require("../../src/api/auth/user/user.class");
const usermodel_1 = __importDefault(require("../../src/api/auth/user/usermodel"));
exports.User = usermodel_1.default;
const exercise_class_1 = require("../../src/api/workout/Excercise/exercise.class");
Object.defineProperty(exports, "ExerciseClass", { enumerable: true, get: function () { return exercise_class_1.ExerciseClass; } });
const appTest_1 = __importDefault(require("../../src/appTest"));
exports.app = appTest_1.default;
const exerciseController = __importStar(require("../../src/api/workout/Excercise/exercise.controller"));
exports.exerciseController = exerciseController;
/**
 * command to run the test for this file
 * npm t --userTest/user.test.ts
 */
const userInput = new user_class_1.UserClass("chicken2222", "test", "test", "test");
exports.userInput = userInput;
const userPayLoad = {
    success: true,
    user: {
        displayName: "chicken2222",
        email: "test",
        password: "test",
        photoURL: "test",
        Id: "769b33f1-3e90-4b20-9776-79ee5f2cbb03",
        updatedAt: "2022-10-20T10:15:11.865Z",
        createdAt: "2022-10-20T10:15:11.865Z",
    },
};
exports.userPayLoad = userPayLoad;
let exerciseInput = new exercise_class_1.ExerciseClass("blackMhofu", "Here are some notes about this workout type..", 67, 4, 5, 5, "cf5631e5-d5dc-4f52-9a07-de6a63fbebdc", "6c37b303-ac2f-475a-9b14-f7308ccf77a8");
exports.exerciseInput = exerciseInput;
const exerciseInstance = {
    Id: "e941f7d1-c65c-4995-a53f-40a0f56c4a6a",
    exerciseName: "blackmhofu",
    weight: 67,
    reps: 4,
    duration: 5,
    distance: 5,
    exerciseNotes: "Here are some notes about this workout type..",
    createdAt: "2022-10-20T14:18:55.290Z",
    updatedAt: "2022-10-20T14:18:55.290Z",
    userId: "9bf78f57-91bd-45a9-87ab-2b822bdb3395",
    workoutTypeId: "d204ec21-9217-4eeb-bbbe-9db39b46d505",
};
exports.exerciseInstance = exerciseInstance;
const exercisePayload = {
    success: true,
    msg: "exercise was successfully created !! ",
    exercise: {
        exerciseName: "blackmhofu",
        exerciseNotes: "Here are some notes about this workout type..",
        weight: 67,
        reps: 4,
        duration: 5,
        distance: 5,
        userId: "cf5631e5-d5dc-4f52-9a07-de6a63fbebdc",
        workoutTypeId: "c3a22002-0d58-4fae-b3ab-5d28b7a25f42",
        Id: "6c37b303-ac2f-475a-9b14-f7308ccf77a8",
        updatedAt: "2022-10-20T12:54:43.541Z",
        createdAt: "2022-10-20T12:54:43.541Z",
    },
};
exports.exercisePayload = exercisePayload;
