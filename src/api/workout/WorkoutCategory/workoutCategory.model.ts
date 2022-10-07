import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import { v4 as uuidv4 } from 'uuid';


const WorkoutCategory = postgresDdClient.define("workout_category", {
  workoutCategoryId: {
    type: DataTypes.STRING,
    primaryKey: true,
  
  },
  workoutCategoryName: {
    type: DataTypes.STRING,
    primaryKey: true,
  
  },
 
  
});

export default WorkoutCategory;
