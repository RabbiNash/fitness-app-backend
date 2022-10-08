import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";

import WorkoutCategory from "../workoutCategory/workoutCategory.model";
import Exercise from "../Excercise/exercise.model";
import User from "../../auth/user/user.model";


const WorkoutType = postgresDdClient.define("workout_type", {
  workoutTypeId: {
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
WorkoutType.belongsTo(WorkoutCategory)
WorkoutCategory.hasMany(WorkoutType)

WorkoutType.hasMany(Exercise)
Exercise.belongsTo(WorkoutType)

User.hasMany(Exercise)
Exercise.belongsTo(User)



export default WorkoutType;
