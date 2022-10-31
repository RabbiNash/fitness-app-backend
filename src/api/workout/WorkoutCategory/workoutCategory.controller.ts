import { Request, Response } from "express";

import { workoutCategoryClass } from "./workoutCategoryclass";
import * as workoutCategoryservice from "./workoutCategory.service";

export const addworkoutCategoryController = async (
  req: Request,
  res: Response
) => {
  const { workoutCategoryName } = req.body;
  let newworkoutCategory = new workoutCategoryClass(workoutCategoryName);

  try {
    let workoutCategoryResult =
      await workoutCategoryservice.addworkoutCategoryRepository(
        newworkoutCategory
      );

    return res.json({
      success: true,
      msg: "workoutCategory was successfully created !! ",
      workoutCategory: workoutCategoryResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

//get workoutCategory by id
export const getworkoutCategoryController = async (
  req: Request,
  res: Response
) => {
  const { Id } = req.params;
  try {
    let workoutCategoryFound =
      await workoutCategoryservice.getworkoutCategoryRepository(Id);
    if (workoutCategoryFound == null) {
      return res.status(400).json({
        success: false,
        msg: "No entry was found please provide a valid workoutTypeId !!",
      });
    }

    return res.json({
      success: true,
      workoutCategory: workoutCategoryFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const getAllworkoutCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    let workoutCategorysFound =
      await workoutCategoryservice.getAllworkoutCategoriesRepository();

    return res.json({
      success: true,
      workoutCategories: workoutCategorysFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
export const upDateworkoutCategoryController = async (
  req: Request,
  res: Response
) => {
  try {
    let workoutCategoryUpdateResults =
      await workoutCategoryservice.upDateworkoutCategoryRepository({
        ...req.body,
      });

    if (workoutCategoryUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was updated please provide a valid workoutCategoryId !!",
      });
    }

    return res.json({
      success: true,
      msg: "workoutCategory was successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const deleteworkoutCategoryController = async (
  req: Request,
  res: Response
) => {
  const { Id } = req.params;
  try {
    let workoutCategoryDeleteResults =
      await workoutCategoryservice.deleteworkoutCategoryRepository(Id);

    if (workoutCategoryDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was deleted please provide a valid workoutCategoryId !!",
      });
    }

    return res.json({
      success: true,
      msg: "Entry  was successfully deleted  ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
