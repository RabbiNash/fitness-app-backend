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
const workoutType_model_1 = __importDefault(require("../workoutType/workoutType.model"));
const uuid_1 = require("uuid");
class workoutTypeservice {
    constructor() {
        this.addworkoutTypeRepository = (workoutTypeOptions) => __awaiter(this, void 0, void 0, function* () {
            let workoutType = yield workoutType_model_1.default.create(Object.assign(Object.assign({}, workoutTypeOptions), { Id: (0, uuid_1.v4)() }));
            return workoutType;
        });
        this.getworkoutTypeRepository = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutTypeFound = yield workoutType_model_1.default.findByPk(Id);
                return workoutTypeFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.getAllworkoutCategoriesRepository = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let workoutCategoriessFound = yield workoutType_model_1.default.findAll();
                return workoutCategoriessFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.upDateworkoutTypeRepository = (updateOptions) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let workoutTypesFound = yield workoutType_model_1.default.update(Object.assign({}, updateOptions), {
                    where: {
                        Id: updateOptions.Id
                    }
                });
                return workoutTypesFound;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.deleteworkoutTypeRepository = (Id) => __awaiter(this, void 0, void 0, function* () {
            try {
                //return the number of destroyed rows
                let deletedworkoutType = yield workoutType_model_1.default.destroy({
                    where: {
                        Id: Id
                    }
                });
                return deletedworkoutType;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = workoutTypeservice;
