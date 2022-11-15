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
exports.deleteworkoutCategoryController = exports.upDateworkoutCategoryController = exports.getAllworkoutCategoryController = exports.getworkoutCategoryController = exports.addworkoutCategoryController = void 0;
const workoutCategoryclass_1 = require("./workoutCategoryclass");
const workoutCategoryservice = __importStar(require("./workoutCategory.service"));
const addworkoutCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { workoutCategoryName } = req.body;
    let newworkoutCategory = new workoutCategoryclass_1.workoutCategoryClass(workoutCategoryName);
    try {
        let workoutCategoryResult = yield workoutCategoryservice.addworkoutCategoryRepository(newworkoutCategory);
        return res.json({
            success: true,
            msg: "workoutCategory was successfully created !! ",
            workoutCategory: workoutCategoryResult,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.addworkoutCategoryController = addworkoutCategoryController;
//get workoutCategory by id
const getworkoutCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let workoutCategoryFound = yield workoutCategoryservice.getworkoutCategoryRepository(Id);
        if (workoutCategoryFound == null) {
            return res.status(400).json({
                success: false,
                msg: "No entry was found please provide a valid workoutTypeId !!",
            });
        }
        return res.json({
            success: true,
            workoutCategory: workoutCategoryFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getworkoutCategoryController = getworkoutCategoryController;
const getAllworkoutCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategorysFound = yield workoutCategoryservice.getAllworkoutCategoriesRepository();
        return res.json({
            success: true,
            workoutCategories: workoutCategorysFound,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.getAllworkoutCategoryController = getAllworkoutCategoryController;
const upDateworkoutCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategoryUpdateResults = yield workoutCategoryservice.upDateworkoutCategoryRepository(Object.assign({}, req.body));
        if (workoutCategoryUpdateResults[0] !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was updated please provide a valid workoutCategoryId !!",
            });
        }
        return res.json({
            success: true,
            msg: "workoutCategory was successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            msg: `${error}`,
        });
    }
});
exports.upDateworkoutCategoryController = upDateworkoutCategoryController;
const deleteworkoutCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Id } = req.params;
    try {
        let workoutCategoryDeleteResults = yield workoutCategoryservice.deleteworkoutCategoryRepository(Id);
        if (workoutCategoryDeleteResults !== 1) {
            return res.status(400).json({
                success: false,
                msg: "No entry was deleted please provide a valid workoutCategoryId !!",
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
exports.deleteworkoutCategoryController = deleteworkoutCategoryController;
