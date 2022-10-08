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
 WorkoutCategory.hasMany(WorkoutType ,{
  foreignKey:"categoryId"
 })
WorkoutType.belongsTo(WorkoutCategory)


WorkoutType.hasMany(Exercise , {
  foreignKey:"workoutId"
})
Exercise.belongsTo(WorkoutType)

User.hasMany(Exercise, {
  foreignKey:"userId"
})
Exercise.belongsTo(User ,{
})



export default WorkoutType;
