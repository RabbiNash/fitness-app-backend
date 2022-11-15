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
exports.deleteworkoutCategoryRepository = exports.upDateworkoutCategoryRepository = exports.getAllworkoutCategoriesRepository = exports.getworkoutCategoryRepository = exports.addworkoutCategoryRepository = void 0;
// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
const workoutCategorymodel_1 = __importDefault(require("./workoutCategorymodel"));
const uuid_1 = require("uuid");
const addworkoutCategoryRepository = (workoutCategoryOptions) => __awaiter(void 0, void 0, void 0, function* () {
    let workoutCategory = yield workoutCategorymodel_1.default.create(Object.assign(Object.assign({}, workoutCategoryOptions), { Id: (0, uuid_1.v4)() }));
    return workoutCategory;
});
exports.addworkoutCategoryRepository = addworkoutCategoryRepository;
const getworkoutCategoryRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategoryFound = yield workoutCategorymodel_1.default.findByPk(Id);
        return workoutCategoryFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getworkoutCategoryRepository = getworkoutCategoryRepository;
const getAllworkoutCategoriesRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let workoutCategoriessFound = yield workoutCategorymodel_1.default.findAll();
        return workoutCategoriessFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.getAllworkoutCategoriesRepository = getAllworkoutCategoriesRepository;
const upDateworkoutCategoryRepository = (updateOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let workoutCategorysFound = yield workoutCategorymodel_1.default.update(Object.assign({}, updateOptions), {
            where: {
                Id: updateOptions.Id,
            },
        });
        return workoutCategorysFound;
    }
    catch (error) {
        console.log(error);
    }
});
exports.upDateworkoutCategoryRepository = upDateworkoutCategoryRepository;
const deleteworkoutCategoryRepository = (Id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //return the number of destroyed rows
        let deletedworkoutCategory = yield workoutCategorymodel_1.default.destroy({
            where: {
                Id: Id,
            },
        });
        return deletedworkoutCategory;
    }
    catch (error) {
        console.log(error);
    }
});
exports.deleteworkoutCategoryRepository = deleteworkoutCategoryRepository;
