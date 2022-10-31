import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";

// import WorkoutCategory from "../workoutCategory/workoutCategory.model";
// import Exercise from "../Excercise/exercise.model";
// import User from "../../auth/user/user.model";


export const WorkoutType = postgresDdClient.define("workout_type", {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  
  },
  workoutTypeName: {
    type: DataTypes.STRING,
    allowNull :false
  
  },
  workoutTypeNotes: {
    type: DataTypes.STRING,
  
  },
 
});
/** 
 * Associations
 * A Workout type belong to a workout category
 */
// WorkoutCategory.hasMany(WorkoutType ,{foreignKey:{
//   allowNull:false
// }} )
// WorkoutType.belongsTo(WorkoutCategory)



// User.hasMany(Exercise,{
//   foreignKey:{
//     allowNull:false
//   }
// })
// Exercise.belongsTo(WorkoutType)
// WorkoutType.hasMany(Exercise ,{
//   foreignKey:{
//     allowNull:false
//   }
// } )
// Exercise.belongsTo(User)
/*

* swagger documentation
*/
/** 
* @openapi
* components:
*   schemas:
*     WorkoutTypeInput:
*       type: object
*       required:
*         - workoutTypeName
*         - workoutCategoryId
*       properties:
*         workoutTypeName:
*           type: string
*           default: my_workouttype_name
*         workoutCategoryId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         workoutTypeNotes:
*           type: string
*           default: my_workouttype_notes

*     UpdateWorkoutType:
*       type: object
*       required:
*         - Id
*       properties:
*         Id:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         workoutTypeName:
*           type: string
*           default: workoutTypeName
*         workoutTypeNotes:
*           type: string
*           default: workoutTypeNotes
*           
*     workoutTypeResponse:
*       type: object
*       properties:
*         workoutTypeName:
*           type: string
*         workoutCategoryId:
*           type: string
*         Id:
*           type: string
*         createdAt:
*           type: string
*         updatedAt:
*           type: string

*/




