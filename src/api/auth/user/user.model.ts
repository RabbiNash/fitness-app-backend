import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import { v4 as uuidv4 } from 'uuid';


const User = postgresDdClient.define("user", {
  userId: {
    type: DataTypes.STRING,
    primaryKey: true,
  
  },
  displayName: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoURL: {
    type: DataTypes.STRING,
  },
});

export default User;
