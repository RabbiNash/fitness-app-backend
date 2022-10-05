import { PgDbHelper }  from "../../../config/pgDb.config" ; 
import DataTypes from "sequelize"


const User =   PgDbHelper.client.define("user", {
    name: DataTypes.TEXT,
    favoriteColor: {
      type: DataTypes.TEXT,
      defaultValue: 'green'
    },
    age: DataTypes.INTEGER,
    cash: DataTypes.INTEGER
  });