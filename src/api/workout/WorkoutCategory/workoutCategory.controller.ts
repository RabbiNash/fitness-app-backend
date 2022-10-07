import { Request, Response } from "express";

import { workoutCategoryClass } from "./workoutCategory.class";
import workoutCategoryservice from "./workoutCategory.service";

export default class workoutCategoryController {
  
  private workoutCategoryService: workoutCategoryservice;

  constructor(){
    this.workoutCategoryService = new workoutCategoryservice()
  }

  public addworkoutCategoryController = async (req: Request, res: Response) => {
    const { workoutCategoryName } = req.body;
    let newworkoutCategory = new workoutCategoryClass(workoutCategoryName);
    
    try {
      let workoutCategoryResult = await this.workoutCategoryService.addworkoutCategoryRepository(newworkoutCategory)

      return res.json({
        success: true,
        msg:"workoutCategory was successfully created !! ",
        workoutCategory :workoutCategoryResult
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };


  //get workoutCategory by id
  public getworkoutCategoryController = async (req: Request, res: Response) => {
    const { workoutCategoryId } = req.params
    try {

      let workoutCategoryFound = await this.workoutCategoryService.getworkoutCategoryRepository(workoutCategoryId)
      

      return res.json({
        success: true,
        workoutCategory:workoutCategoryFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public getAllworkoutCategoryController = async (req: Request, res: Response) => {
 
   
    
    try {

      let workoutCategorysFound = await this.workoutCategoryService.getAllworkoutCategoriesRepository()
      

      return res.json({
        success: true,
        workoutCategories:workoutCategorysFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  public upDateworkoutCategoryController = async (req: Request, res: Response) => {

    try {

      let workoutCategoryUpdateResults = await this.workoutCategoryService.upDateworkoutCategoryRepository({...req.body})

      if( workoutCategoryUpdateResults[0] !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was updated please provide a valid workoutCategoryId !!"
        })

      }

      return res.json({
        success: true,
        msg:"workoutCategory was successfully updated "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public deleteworkoutCategoryController = async (req: Request, res: Response) => {

    const { workoutCategoryId } = req.params
    try {

      let workoutCategoryDeleteResults = await this.workoutCategoryService.deleteworkoutCategoryRepository(workoutCategoryId)


    

     

      if( workoutCategoryDeleteResults !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was deleted please provide a valid workoutCategoryId !!"
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
