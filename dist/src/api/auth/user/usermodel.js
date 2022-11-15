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
/**
 * schemas for swagger API
 */
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         displayName:
 *           type: string
 *           default: jane
 *         password:
 *           type: string
 *           default: password
 *         photoURL:
 *           type: string
 *     UpdateUser:
 *       type: object
 *       required:
 *         - Id
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         Id:
 *           type: string
 *           default: 6effe544-4c66-434a-b752-89603c57f47
 *         displayName:
 *           type: string
 *           default: jane
 *         password:
 *           type: string
 *           default: password
 *         photoURL:
 *           type: string
 *
 *     CreateUserResponce:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         displayame:
 *           type: string
 *         Id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string

 */
exports.default = User;
