import { Request, Response } from "express";
import { CheckMissingParams } from "../../../helpers/helper.MissingArguments";

import { ExerciseClass } from "./exercise.class";
import * as exerciseService from "./exercise.service";

export const addexerciseController = async (req: Request, res: Response) => {
  const {
    exerciseName,
    exerciseNotes,
    weight,
    reps,
    duration,
    distance,
    userId,
    workoutTypeId,
  } = req.body;
  const requiredPars = ["workoutTypeId", "userId"];

  let missingParams = await CheckMissingParams(requiredPars, req.body);

  let newexercise = new ExerciseClass(
    exerciseName,
    exerciseNotes,
    weight,
    reps,
    duration,
    distance,
    userId,
    workoutTypeId
  );

  try {
    if (missingParams.length >= 1) {
      return res.status(400).json({
        success: false,
        msg: "The following params are required",
        missingParams: missingParams,
      });
    }

    let exerciseResult = await exerciseService.addexerciseRepository(
      newexercise
    );

    return res.json({
      success: true,
      msg: "exercise was successfully created !! ",
      exercise: exerciseResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

//get exercise by id
export const getexerciseController = async (req: Request, res: Response) => {
  const { Id } = req.params;
  try {
    let exerciseFound = await exerciseService.getexerciseRepository(Id);

    if (exerciseFound == null) {
      return res.status(400).json({
        success: false,
        msg: "No entry was found please provide a valid exerciseId !!",
      });
    }

    return res.json({
      success: true,
      exercise: exerciseFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const getAllexerciseController = async (req: Request, res: Response) => {
  try {
    let exercisesFound =
      await exerciseService.getAllworkoutCategoriesRepository();

    return res.json({
      success: true,
      workoutCategories: exercisesFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
export const upDateexerciseController = async (req: Request, res: Response) => {
  try {
    let exerciseUpdateResults = await exerciseService.upDateexerciseRepository({
      ...req.body,
    });

    console.log(exerciseUpdateResults + "from controller");

    if (exerciseUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was updated please provide a valid exerciseId !!",
      });
    }

    return res.json({
      success: true,
      msg: "exercise was successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const deleteexerciseController = async (req: Request, res: Response) => {
  const { Id } = req.params;
  try {
    let exerciseDeleteResults = await exerciseService.deleteexerciseRepository(
      Id
    );

    if (exerciseDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was deleted please provide a valid exerciseId !!",
      });
    }

    return res.json({
      success: true,
      msg: "Entry  was successfully deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
