import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";



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
// WorkoutType.belongsTo(WorkoutCategory)

export default WorkoutType;
