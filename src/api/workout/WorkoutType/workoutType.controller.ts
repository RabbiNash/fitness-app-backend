import { Request, Response } from "express";

import { workoutTypeClass } from "./workoutType.class";
import * as WorkoutTypeService from "./workoutType.service";


  export const addworkoutTypeController = async (req: Request, res: Response) => {
    const { workoutTypeName, workoutTypeNotes, workoutCategoryId } = req.body;
    let newworkoutType = new workoutTypeClass(
      workoutTypeName,
      workoutTypeNotes,
      workoutCategoryId
    );

    try {
      let workoutTypeResult =
        await WorkoutTypeService.addworkoutTypeRepository(newworkoutType);

      return res.json({
        success: true,
        msg: "workoutType was successfully created !! ",
        workoutType: workoutTypeResult,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  //get workoutType by id
  export const  getworkoutTypeController = async (req: Request, res: Response) => {
    const { Id } = req.params;
    try {
      let workoutTypeFound =
        await WorkoutTypeService.getworkoutTypeRepository(Id);

      if (workoutTypeFound == null) {
        return res.status(400).json({
          success: false,
          msg: "No entry was found please provide a valid workoutTypeId !!",
        });
      }

      return res.json({
        success: true,
        workoutType: workoutTypeFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  export const  getAllworkoutTypeController = async (req: Request, res: Response) => {
    try {
      let workoutTypesFound =
        await WorkoutTypeService.getAllworkoutCategoriesRepository();

      return res.json({
        success: true,
        workoutCategories: workoutTypesFound,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  export const upDateworkoutTypeController = async (req: Request, res: Response) => {
    try {
      let workoutTypeUpdateResults =
        await WorkoutTypeService.upDateworkoutTypeRepository({
          ...req.body,
        });

      if (workoutTypeUpdateResults[0] !== 1) {
        return res.status(400).json({
          success: false,
          msg: "No entry was updated please provide a valid workoutTypeId !!",
        });
      }

      return res.json({
        success: true,
        msg: "workoutType was successfully updated ",
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  export const  deleteworkoutTypeController = async (req: Request, res: Response) => {
    const { Id } = req.params;
    try {
      let workoutTypeDeleteResults =
        await WorkoutTypeService.deleteworkoutTypeRepository(Id);

      if (workoutTypeDeleteResults !== 1) {
        return res.status(400).json({
          success: false,
          msg: "No entry was deleted please provide a valid workoutTypeId !!",
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

