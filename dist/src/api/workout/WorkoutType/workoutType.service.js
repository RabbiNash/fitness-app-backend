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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteworkoutTypeRepository = exports.upDateworkoutTypeRepository = exports.getAllworkoutCategoriesRepository = exports.getworkoutTypeRepository = exports.addworkoutTypeRepository = void 0;
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const workoutTypemodel_1 = require("./workoutTypemodel");
const uuid_1 = require("uuid");
const addworkoutTypeRepository = (workoutTypeOptions) => __awaiter(void 0, void 0, void 0, function* () {
    let workoutType = yield workoutTypemodel_1.WorkoutType.create(Object.assign(Object.assign({}, workoutTypeOptions), { Id: (0, uuid_1.v4)() }));
    return workoutType;
});
exports.addworkoutTypeRepository = addworkoutTypeRepository;
const getworkoutTypeRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutTypeFound = yield workoutTypemodel_1.WorkoutType.findByPk(Id);
        return workoutTypeFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getworkoutTypeRepository = getworkoutTypeRepository;
const getAllworkoutCategoriesRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategoriessFound = yield workoutTypemodel_1.WorkoutType.findAll();
        return workoutCategoriessFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllworkoutCategoriesRepository = getAllworkoutCategoriesRepository;
const upDateworkoutTypeRepository = (updateOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let workoutTypesFound = yield workoutTypemodel_1.WorkoutType.update(Object.assign({}, updateOptions), {
            where: {
                Id: updateOptions.Id,
            },
        });
        return workoutTypesFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.upDateworkoutTypeRepository = upDateworkoutTypeRepository;
const deleteworkoutTypeRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let deletedworkoutType = yield workoutTypemodel_1.WorkoutType.destroy({
            where: {
                Id: Id,
            },
        });
        return deletedworkoutType;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteworkoutTypeRepository = deleteworkoutTypeRepository;
