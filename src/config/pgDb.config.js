"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
let postgresDdClient = new sequelize_1.Sequelize("fitness_db", "postgres", "1311", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
});
exports.default = postgresDdClient;
