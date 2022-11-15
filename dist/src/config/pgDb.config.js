"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let postgresDdClient = new sequelize_1.Sequelize("fitness_db", process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
exports.default = postgresDdClient;
