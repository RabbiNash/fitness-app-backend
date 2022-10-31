// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import workoutCategoryModel from "./workoutCategorymodel";
import { workoutCategoryClass } from "./workoutCategoryclass";
import { v4 as uuidv4 } from "uuid";

export const addworkoutCategoryRepository = async (
  workoutCategoryOptions: workoutCategoryClass
): Promise<any> => {
  let workoutCategory = await workoutCategoryModel.create({
    ...workoutCategoryOptions,
    Id: uuidv4(),
  });

  return workoutCategory;
};

export const getworkoutCategoryRepository = async (
  Id: string
): Promise<any> => {
  try {
    let workoutCategoryFound = await workoutCategoryModel.findByPk(Id);

    return workoutCategoryFound;
  } catch (error) {
    console.log(error);
  }
};

export const getAllworkoutCategoriesRepository = async (): Promise<any> => {
  try {
    let workoutCategoriessFound = await workoutCategoryModel.findAll();

    return workoutCategoriessFound;
  } catch (error) {
    console.log(error);
  }
};

export const upDateworkoutCategoryRepository = async (updateOptions: {
  [x: string]: any;
}): Promise<any> => {
  try {
    //return the number of destroyed rows
    let workoutCategorysFound = await workoutCategoryModel.update(
      {
        ...updateOptions,
      },
      {
        where: {
          Id: updateOptions.Id,
        },
      }
    );

    return workoutCategorysFound;
  } catch (error) {
    console.log(error);
  }
};

export const deleteworkoutCategoryRepository = async (
  Id: string
): Promise<any> => {
  try {
    //return the number of destroyed rows
    let deletedworkoutCategory = await workoutCategoryModel.destroy({
      where: {
        Id: Id,
      },
    });

    return deletedworkoutCategory;
  } catch (error) {
    console.log(error);
  }
};
