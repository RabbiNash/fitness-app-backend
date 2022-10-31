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
const workoutCategory_class_1 = require("./workoutCategory.class");
const workoutCategory_service_1 = __importDefault(require("./workoutCategory.service"));
class workoutCategoryController {
    constructor() {
        this.addworkoutCategoryController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { workoutCategoryName } = req.body;
            let newworkoutCategory = new workoutCategory_class_1.workoutCategoryClass(workoutCategoryName);
            try {
                let workoutCategoryResult = yield this.workoutCategoryService.addworkoutCategoryRepository(newworkoutCategory);
                return res.json({
                    success: true,
                    msg: "workoutCategory was successfully created !! ",
                    workoutCategory: workoutCategoryResult
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        //get workoutCategory by id
        this.getworkoutCategoryController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            try {
                let workoutCategoryFound = yield this.workoutCategoryService.getworkoutCategoryRepository(Id);
                if (workoutCategoryFound == null) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was found please provide a valid workoutTypeId !!"
                    });
                }
                return res.json({
                    success: true,
                    workoutCategory: workoutCategoryFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.getAllworkoutCategoryController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutCategorysFound = yield this.workoutCategoryService.getAllworkoutCategoriesRepository();
                return res.json({
                    success: true,
                    workoutCategories: workoutCategorysFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.upDateworkoutCategoryController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutCategoryUpdateResults = yield this.workoutCategoryService.upDateworkoutCategoryRepository(Object.assign({}, req.body));
                if (workoutCategoryUpdateResults[0] !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was updated please provide a valid workoutCategoryId !!"
                    });
                }
                return res.json({
                    success: true,
                    msg: "workoutCategory was successfully updated "
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.deleteworkoutCategoryController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            try {
                let workoutCategoryDeleteResults = yield this.workoutCategoryService.deleteworkoutCategoryRepository(Id);
                if (workoutCategoryDeleteResults !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was deleted please provide a valid workoutCategoryId !!"
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
        this.workoutCategoryService = new workoutCategory_service_1.default();
    }
}
exports.default = workoutCategoryController;
