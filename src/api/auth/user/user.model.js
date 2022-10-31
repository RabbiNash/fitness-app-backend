"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgDb_config_1 = __importDefault(require("../../../config/pgDb.config"));
const User = pgDb_config_1.default.define("user", {
    Id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    photoURL: {
        type: sequelize_1.DataTypes.STRING,
    },
});
exports.default = User;
