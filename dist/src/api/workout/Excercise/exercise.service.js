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
exports.deleteexerciseRepository = exports.upDateexerciseRepository = exports.getAllworkoutCategoriesRepository = exports.getexerciseRepository = exports.addexerciseRepository = void 0;
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const exercisemodel_1 = __importDefault(require("./exercisemodel"));
const uuid_1 = require("uuid");
const addexerciseRepository = (exerciseOptions) => __awaiter(void 0, void 0, void 0, function* () {
    let exercise = yield exercisemodel_1.default.create(Object.assign(Object.assign({}, exerciseOptions), { Id: (0, uuid_1.v4)() }));
    return exercise;
});
exports.addexerciseRepository = addexerciseRepository;
const getexerciseRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let exerciseFound = yield exercisemodel_1.default.findByPk(Id);
        return exerciseFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getexerciseRepository = getexerciseRepository;
const getAllworkoutCategoriesRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategoriessFound = yield exercisemodel_1.default.findAll();
        return workoutCategoriessFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllworkoutCategoriesRepository = getAllworkoutCategoriesRepository;
const upDateexerciseRepository = (updateOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let exercisesFound = yield exercisemodel_1.default.update(Object.assign({}, updateOptions), {
            where: {
                Id: updateOptions.Id,
            },
        });
        return exercisesFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.upDateexerciseRepository = upDateexerciseRepository;
const deleteexerciseRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let deletedexercise = yield exercisemodel_1.default.destroy({
            where: {
                Id: Id,
            },
        });
        return deletedexercise;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteexerciseRepository = deleteexerciseRepository;
