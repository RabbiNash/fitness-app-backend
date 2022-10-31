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
exports.deleteexerciseController = exports.upDateexerciseController = exports.getAllexerciseController = exports.getexerciseController = exports.addexerciseController = void 0;
const helper_MissingArguments_1 = require("../../../helpers/helper.MissingArguments");
const exercise_class_1 = require("./exercise.class");
const exerciseService = __importStar(require("./exercise.service"));
const addexerciseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { exerciseName, exerciseNotes, weight, reps, duration, distance, userId, workoutTypeId, } = req.body;
    const requiredPars = ["workoutTypeId", "userId"];
    let missingParams = yield (0, helper_MissingArguments_1.CheckMissingParams)(requiredPars, req.body);
    let newexercise = new exercise_class_1.ExerciseClass(exerciseName, exerciseNotes, weight, reps, duration, distance, userId, workoutTypeId);
    try {
        if (missingParams.length >= 1) {
            return res.status(400).json({
                success: false,
                msg: "The following params are required",
                missingParams: missingParams
            });
        }
        let exerciseResult = yield exerciseService.addexerciseRepository(newexercise);
        return res.json({
            success: true,
            msg: "exercise was successfully created !! ",
            exercise: exerciseResult,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.addexerciseController = addexerciseController;
//get exercise by id
const getexerciseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let exerciseFound = yield exerciseService.getexerciseRepository(Id);
        if (exerciseFound == null) {
            return res.status(400).json({
                success: false,
                msg: "No entry was found please provide a valid exerciseId !!",
            });
        }
        return res.json({
            success: true,
            exercise: exerciseFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getexerciseController = getexerciseController;
const getAllexerciseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let exercisesFound = yield exerciseService.getAllworkoutCategoriesRepository();
        return res.json({
            success: true,
            workoutCategories: exercisesFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getAllexerciseController = getAllexerciseController;
const upDateexerciseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let exerciseUpdateResults = yield exerciseService.upDateexerciseRepository(Object.assign({}, req.body));
        console.log(exerciseUpdateResults + "from controller");
        if (exerciseUpdateResults[0] !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was updated please provide a valid exerciseId !!",
            });
        }
        return res.json({
            success: true,
            msg: "exercise was successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.upDateexerciseController = upDateexerciseController;
const deleteexerciseController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let exerciseDeleteResults = yield exerciseService.deleteexerciseRepository(Id);
        if (exerciseDeleteResults !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was deleted please provide a valid exerciseId !!",
            });
        }
        return res.json({
            success: true,
            msg: "Entry  was successfully deleted",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.deleteexerciseController = deleteexerciseController;
