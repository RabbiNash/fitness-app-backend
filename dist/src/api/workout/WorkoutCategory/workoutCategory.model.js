"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgDb_config_1 = __importDefault(require("../../../config/pgDb.config"));
// import WorkoutType from "../WorkoutType/workoutType.model";
const WorkoutCategory = pgDb_config_1.default.define("workout_category", {
    Id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    workoutCategoryName: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
});
/***
 * associations with other tables
 *1. A workout category has many types
 *
 *
 */
// WorkoutCategory.hasMany(WorkoutType)
exports.default = WorkoutCategory;
