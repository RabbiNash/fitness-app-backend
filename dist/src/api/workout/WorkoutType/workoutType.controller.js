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
exports.deleteworkoutTypeController = exports.upDateworkoutTypeController = exports.getAllworkoutTypeController = exports.getworkoutTypeController = exports.addworkoutTypeController = void 0;
const workoutType_class_1 = require("./workoutType.class");
const WorkoutTypeService = __importStar(require("./workoutType.service"));
const addworkoutTypeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { workoutTypeName, workoutTypeNotes, workoutCategoryId } = req.body;
    let newworkoutType = new workoutType_class_1.workoutTypeClass(workoutTypeName, workoutTypeNotes, workoutCategoryId);
    try {
        let workoutTypeResult = yield WorkoutTypeService.addworkoutTypeRepository(newworkoutType);
        return res.json({
            success: true,
            msg: "workoutType was successfully created !! ",
            workoutType: workoutTypeResult,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.addworkoutTypeController = addworkoutTypeController;
//get workoutType by id
const getworkoutTypeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let workoutTypeFound = yield WorkoutTypeService.getworkoutTypeRepository(Id);
        if (workoutTypeFound == null) {
            return res.status(400).json({
                success: false,
                msg: "No entry was found please provide a valid workoutTypeId !!",
            });
        }
        return res.json({
            success: true,
            workoutType: workoutTypeFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getworkoutTypeController = getworkoutTypeController;
const getAllworkoutTypeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutTypesFound = yield WorkoutTypeService.getAllworkoutCategoriesRepository();
        return res.json({
            success: true,
            workoutCategories: workoutTypesFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getAllworkoutTypeController = getAllworkoutTypeController;
const upDateworkoutTypeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutTypeUpdateResults = yield WorkoutTypeService.upDateworkoutTypeRepository(Object.assign({}, req.body));
        if (workoutTypeUpdateResults[0] !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was updated please provide a valid workoutTypeId !!",
            });
        }
        return res.json({
            success: true,
            msg: "workoutType was successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.upDateworkoutTypeController = upDateworkoutTypeController;
const deleteworkoutTypeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let workoutTypeDeleteResults = yield WorkoutTypeService.deleteworkoutTypeRepository(Id);
        if (workoutTypeDeleteResults !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was deleted please provide a valid workoutTypeId !!",
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
exports.deleteworkoutTypeController = deleteworkoutTypeController;
