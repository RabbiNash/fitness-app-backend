// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import ExerciseModel from "./exercisemodel";
import { ExerciseClass } from "./exercise.class";
import { v4 as uuidv4 } from "uuid";

export const addexerciseRepository = async (
  exerciseOptions: ExerciseClass
): Promise<any> => {
  let exercise = await ExerciseModel.create({
    ...exerciseOptions,

    Id: uuidv4(),
  });

  return exercise;
};

export const getexerciseRepository = async (Id: string): Promise<any> => {
  try {
    let exerciseFound = await ExerciseModel.findByPk(Id);

    return exerciseFound;
  } catch (error) {
    console.log(error);
  }
};

export const getAllworkoutCategoriesRepository = async (): Promise<any> => {
  try {
    let workoutCategoriessFound = await ExerciseModel.findAll();

    return workoutCategoriessFound;
  } catch (error) {
    console.log(error);
  }
};

export const upDateexerciseRepository = async (updateOptions: {
  [x: string]: any;
}): Promise<any> => {
  try {
    //return the number of destroyed rows
    let exercisesFound = await ExerciseModel.update(
      {
        ...updateOptions,
      },
      {
        where: {
          Id: updateOptions.Id,
        },
      }
    );

    return exercisesFound;
  } catch (error) {
    console.log(error);
  }
};

export const deleteexerciseRepository = async (Id: string): Promise<any> => {
  try {
    //return the number of destroyed rows
    let deletedexercise = await ExerciseModel.destroy({
      where: {
        Id: Id,
      },
    });

    return deletedexercise;
  } catch (error) {
    console.log(error);
  }
};
