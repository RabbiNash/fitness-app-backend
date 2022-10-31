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
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const workoutCategory_model_1 = __importDefault(require("../WorkoutCategory/workoutCategory.model"));
const uuid_1 = require("uuid");
class workoutCategoryservice {
    constructor() {
        this.addworkoutCategoryRepository = (workoutCategoryOptions) => __awaiter(this, void 0, void 0, function* () {
            let workoutCategory = yield workoutCategory_model_1.default.create(Object.assign(Object.assign({}, workoutCategoryOptions), { Id: (0, uuid_1.v4)() }));
            return workoutCategory;
        });
        this.getworkoutCategoryRepository = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutCategoryFound = yield workoutCategory_model_1.default.findByPk(Id);
                return workoutCategoryFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAllworkoutCategoriesRepository = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutCategoriessFound = yield workoutCategory_model_1.default.findAll();
                return workoutCategoriessFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.upDateworkoutCategoryRepository = (updateOptions) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let workoutCategorysFound = yield workoutCategory_model_1.default.update(Object.assign({}, updateOptions), {
                    where: {
                        Id: updateOptions.Id
                    }
                });
                return workoutCategorysFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.deleteworkoutCategoryRepository = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let deletedworkoutCategory = yield workoutCategory_model_1.default.destroy({
                    where: {
                        Id: Id
                    }
                });
                return deletedworkoutCategory;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = workoutCategoryservice;
