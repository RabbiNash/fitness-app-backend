import User from "../api/auth/user/user.model"
import Exercise from "../api/workout/Excercise/exercise.model"
import WorkoutCategory from "../api/workout/WorkoutCategory/workoutCategorymodel"
import { WorkoutType } from "../api/workout/workoutType/workoutType.model"

/**defining all the relationships in one files coz they are not recognised by the tests
 * 
 */
export const defineRelationships = async() =>{


  WorkoutCategory.hasMany(WorkoutType ,{foreignKey:{
    allowNull:false
  }} )
  WorkoutType.belongsTo(WorkoutCategory)
  
  
  
  User.hasMany(Exercise,{
    foreignKey:{
      allowNull:false
    }
  })
  Exercise.belongsTo(WorkoutType)
  WorkoutType.hasMany(Exercise ,{
    foreignKey:{
      allowNull:false
    }
  } )
  Exercise.belongsTo(User)

  console.log("Relationships  initialising done ....!!")
}
