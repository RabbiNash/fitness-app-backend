import { DataTypes ,Sequelize } from "sequelize";
import postgresDdClient from "../../../config/pgDb.config";
import { v4 as uuidv4 } from 'uuid';


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

export default WorkoutType;
