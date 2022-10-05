import { Sequelize } from "sequelize";

let postgresDdClient = new Sequelize("fitness_db", "postgres", "1311", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default postgresDdClient
