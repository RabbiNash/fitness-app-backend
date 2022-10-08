import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
// import WorkoutType from "../WorkoutType/workoutType.model";



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

/***
 * associations with other tables
 *1. A workout category has many types
 * 
 * 
 */
// WorkoutCategory.hasMany(WorkoutType)

export default WorkoutCategory;
