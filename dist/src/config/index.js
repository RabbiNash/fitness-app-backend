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
exports.defineRelationships = void 0;
const usermodel_1 = __importDefault(require("../api/auth/user/usermodel"));
const exercisemodel_1 = __importDefault(require("../api/workout/Excercise/exercisemodel"));
const workoutCategorymodel_1 = __importDefault(require("../api/workout/WorkoutCategory/workoutCategorymodel"));
const workoutTypemodel_1 = require("../api/workout/WorkoutType/workoutTypemodel");
/**defining all the relationships in one files coz they are not recognised by the tests
 *
 */
const defineRelationships = () => __awaiter(void 0, void 0, void 0, function* () {
    workoutCategorymodel_1.default.hasMany(workoutTypemodel_1.WorkoutType, {
        foreignKey: {
            allowNull: false,
        },
    });
    workoutTypemodel_1.WorkoutType.belongsTo(workoutCategorymodel_1.default);
    usermodel_1.default.hasMany(exercisemodel_1.default, {
        foreignKey: {
            allowNull: false,
        },
    });
    exercisemodel_1.default.belongsTo(workoutTypemodel_1.WorkoutType);
    workoutTypemodel_1.WorkoutType.hasMany(exercisemodel_1.default, {
        foreignKey: {
            allowNull: false,
        },
    });
    exercisemodel_1.default.belongsTo(usermodel_1.default);
    let result = Promise.resolve(true);
    console.log("Relationships  initialising done ....!!");
    return result;
});
exports.defineRelationships = defineRelationships;
