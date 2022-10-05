import { DataTypes } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";

const User = postgresDdClient.define("user", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  displayName: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoURL: {
    type: DataTypes.STRING,
  },
});

export default User;
