"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgDb_config_1 = __importDefault(require("../../../config/pgDb.config"));
const Exercise = pgDb_config_1.default.define("exercise", {
    Id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    exerciseName: {
        type: sequelize_1.DataTypes.STRING,
    },
    weight: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false,
    },
    reps: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    duration: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    distance: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    exerciseNotes: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = Exercise;
