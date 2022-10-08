import { Request, Response } from "express";

import { ExerciseClass } from "./exercise.class";
import exerciseservice from "./exercise.service";

export default class exerciseController {
  
  private exerciseService: exerciseservice;

  constructor(){
    this.exerciseService = new exerciseservice()
  }

  public addexerciseController = async (req: Request, res: Response) => {
    const { exerciseName , exerciseNotes,weight,reps ,duration ,distance} = req.body;
    let newexercise = new ExerciseClass(exerciseName , exerciseNotes,weight,reps ,duration,distance );

  
    try {
      let exerciseResult = await this.exerciseService.addexerciseRepository(newexercise)

      return res.json({
        success: true,
        msg:"exercise was successfully created !! ",
        exercise :exerciseResult
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };


  //get exercise by id
  public getexerciseController = async (req: Request, res: Response) => {
    const { Id } = req.params
    try {

      let exerciseFound = await this.exerciseService.getexerciseRepository(Id)

      if( exerciseFound == null){
        return res.status(400).json({
          success:false,
          msg:"No entry was found please provide a valid exerciseId !!"
        })

      }
      

      return res.json({
        success: true,
        exercise:exerciseFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public getAllexerciseController = async (req: Request, res: Response) => {
 
   
    
    try {

      let exercisesFound = await this.exerciseService.getAllworkoutCategoriesRepository()
      

      return res.json({
        success: true,
        workoutCategories:exercisesFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  public upDateexerciseController = async (req: Request, res: Response) => {

    try {

      let exerciseUpdateResults = await this.exerciseService.upDateexerciseRepository({...req.body})

      if( exerciseUpdateResults[0] !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was updated please provide a valid exerciseId !!"
        })

      }

      return res.json({
        success: true,
        msg:"exercise was successfully updated "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public deleteexerciseController = async (req: Request, res: Response) => {

    const { Id } = req.params
    try {

      let exerciseDeleteResults = await this.exerciseService.deleteexerciseRepository(Id)


    

     

      if( exerciseDeleteResults !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was deleted please provide a valid exerciseId !!"
        })

      }

      return res.json({
        success: true,
        msg:"Entry  was successfully deleted  "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  
}
