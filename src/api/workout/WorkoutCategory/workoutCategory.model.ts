import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
// import WorkoutType from "../WorkoutType/workoutType.model";



const WorkoutCategory = postgresDdClient.define("workout_category", {
  Id: {
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



/**
 * swagger documentation
 */
/** 
 * @openapi
 * components:
 *   schemas:
 *     WorkoutCategoryInput:
 *       type: object
 *       required:
 *         - workoutCategoryName
 *       properties:
 *         workoutCategoryName:
 *           type: string
 *           default: my_workout_name

 *     UpdateWorkoutCategory:
 *       type: object
 *       required:
 *         - Id
 *       properties:
 *         Id:
 *           type: string
 *           default: 6effe544-4c66-434a-b752-89603c57f47
 *         workoutCategoryName:
 *           type: string
 *           default: workoutCategoryName
 *           
 *     workoutCategoryResponse:
 *       type: object
 *       properties:
 *         workoutCategoryName:
 *           type: string
 *         Id:
 *           type: string
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string

 */


export default WorkoutCategory;
