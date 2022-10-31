"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgDb_config_1 = __importDefault(require("../../../config/pgDb.config"));
const workoutCategory_model_1 = __importDefault(require("../workoutCategory/workoutCategory.model"));
const exercise_model_1 = __importDefault(require("../Excercise/exercise.model"));
const user_model_1 = __importDefault(require("../../auth/user/user.model"));
const WorkoutType = pgDb_config_1.default.define("workout_type", {
    Id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    workoutTypeName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    workoutTypeNotes: {
        type: sequelize_1.DataTypes.STRING,
    },
});
/**
 * Associations
 * A Workout type belong to a workout category
 */
workoutCategory_model_1.default.hasMany(WorkoutType, {
    foreignKey: {
        allowNull: false
    }
});
WorkoutType.belongsTo(workoutCategory_model_1.default);
user_model_1.default.hasMany(exercise_model_1.default, {
    foreignKey: {
        allowNull: false
    }
});
exercise_model_1.default.belongsTo(WorkoutType);
WorkoutType.hasMany(exercise_model_1.default, {
    foreignKey: {
        allowNull: false
    }
});
exercise_model_1.default.belongsTo(user_model_1.default);
exports.default = WorkoutType;
