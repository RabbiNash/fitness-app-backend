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
const workoutType_class_1 = require("./workoutType.class");
const workoutType_service_1 = __importDefault(require("./workoutType.service"));
class workoutTypeController {
    constructor() {
        this.addworkoutTypeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { workoutTypeName, workoutTypeNotes, workoutCategoryId } = req.body;
            let newworkoutType = new workoutType_class_1.workoutTypeClass(workoutTypeName, workoutTypeNotes, workoutCategoryId);
            try {
                let workoutTypeResult = yield this.workoutTypeService.addworkoutTypeRepository(newworkoutType);
                return res.json({
                    success: true,
                    msg: "workoutType was successfully created !! ",
                    workoutType: workoutTypeResult
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
        //get workoutType by id
        this.getworkoutTypeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            try {
                let workoutTypeFound = yield this.workoutTypeService.getworkoutTypeRepository(Id);
                if (workoutTypeFound == null) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was found please provide a valid workoutTypeId !!"
                    });
                }
                return res.json({
                    success: true,
                    workoutType: workoutTypeFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.getAllworkoutTypeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutTypesFound = yield this.workoutTypeService.getAllworkoutCategoriesRepository();
                return res.json({
                    success: true,
                    workoutCategories: workoutTypesFound
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.upDateworkoutTypeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutTypeUpdateResults = yield this.workoutTypeService.upDateworkoutTypeRepository(Object.assign({}, req.body));
                if (workoutTypeUpdateResults[0] !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was updated please provide a valid workoutTypeId !!"
                    });
                }
                return res.json({
                    success: true,
                    msg: "workoutType was successfully updated "
                });
            }
            catch (error) {
                return res.status(500).json({
                    success: false,
                    msg: `${error}`,
                });
            }
        });
        this.deleteworkoutTypeController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { Id } = req.params;
            try {
                let workoutTypeDeleteResults = yield this.workoutTypeService.deleteworkoutTypeRepository(Id);
                if (workoutTypeDeleteResults !== 1) {
                    return res.status(400).json({
                        success: false,
                        msg: "No entry was deleted please provide a valid workoutTypeId !!"
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
        this.workoutTypeService = new workoutType_service_1.default();
    }
}
exports.default = workoutTypeController;
