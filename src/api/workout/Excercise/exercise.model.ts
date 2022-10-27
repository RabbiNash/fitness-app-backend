import { DataTypes, Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import { v4 as uuidv4 } from "uuid";

const Exercise = postgresDdClient.define("exercise", {
  Id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  exerciseName: {
    type: DataTypes.STRING,
  },
  weight: {
    type: DataTypes.DOUBLE,
  },
  reps: {
    type: DataTypes.INTEGER,
  },
  duration: {
    type: DataTypes.DOUBLE,
  },
  distance: {
    type: DataTypes.DOUBLE,
  },
  exerciseNotes: {
    type: DataTypes.STRING,
  },
});
/**
 * Documentation for swagger api documentation
 */

/** 
* @openapi
* components:
*   schemas:
*     ExerciseInput:
*       type: object
*       required:
*         - workoutTypeId
*         - exerciseName
*         - userId
*       properties:
*         exerciseName:
*           type: string
*           default: my_exercise_name
*         workoutTypeId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         userId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         exerciseNotes:
*           type: string
*           default: my_exercise_notes
*         weight:
*           type: number
*           default: 0
*         reps:
*           type: number
*           default: 0
*         duration:
*           type: number
*           default: 0
*         distance:
*           type: number
*           default: 0
*  
*     ExerciseUpdate:
*       type: object
*       required:
*         - Id
*       properties:
*         exerciseName:
*           type: string
*           default: my_exercise_name
*         Id:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         workoutTypeId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         userId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         exerciseNotes:
*           type: string
*           default: my_exercise_notes
*         weight:
*           type: number
*           default: 0
*         reps:
*           type: number
*           default: 0
*         duration:
*           type: number
*           default: 0
*         distance:
*           type: number
*           default: 0

*     ExerciseResponse:
*       type: object
*       properties:
*         exerciseName:
*           type: string
*           default: my_exercise_name
*         Id:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         workoutTypeId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         userId:
*           type: string
*           default: 6effe544-4c66-434a-b752-89603c57f47
*         exerciseNotes:
*           type: string
*           default: my_exercise_notes
*         weight:
*           type: number
*           default: 0
*         reps:
*           type: number
*           default: 0
*         duration:
*           type: number
*           default: 0
*         distance:
*           type: number
*           default: 0
*         createdAt:
*           type: string
*         updatedAt:
*           type: string
*  

*/



export default Exercise;
