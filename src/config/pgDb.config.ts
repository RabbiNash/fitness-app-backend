import { Sequelize } from "sequelize";

let postgresDdClient = new Sequelize(
  "fitness_db",
  process.env.DB_USER!,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);

export default postgresDdClient;
