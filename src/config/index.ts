import User from "../api/auth/user/usermodel";
import Exercise from "../api/workout/Excercise/exercisemodel";
import WorkoutCategory from "../api/workout/WorkoutCategory/workoutCategorymodel";
import { WorkoutType } from "../api/workout/WorkoutType/workoutTypemodel";

/**defining all the relationships in one files coz they are not recognised by the tests
 *
 */
export const defineRelationships = async () : Promise<boolean>=> {
  WorkoutCategory.hasMany(WorkoutType, {
    foreignKey: {
      allowNull: false,
    },
  });
  WorkoutType.belongsTo(WorkoutCategory);

  User.hasMany(Exercise, {
    foreignKey: {
      allowNull: false,
    },
  });
  Exercise.belongsTo(WorkoutType);
  WorkoutType.hasMany(Exercise, {
    foreignKey: {
      allowNull: false,
    },
  });
  Exercise.belongsTo(User);

  let result = Promise.resolve(true)
  console.log("Relationships  initialising done ....!!");
  return result;
};
