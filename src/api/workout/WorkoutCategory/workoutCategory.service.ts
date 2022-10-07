// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import workoutCategoryModel from "../workoutCategory/workoutCategory.model";
import { workoutCategoryClass } from "./workoutCategory.class";
import { v4 as uuidv4 } from "uuid";


export default class workoutCategoryservice {
 

  public addworkoutCategoryRepository = async (workoutCategoryOptions: workoutCategoryClass) :Promise<any> => {
    let workoutCategory = await workoutCategoryModel.create({
      ...workoutCategoryOptions,
      workoutCategoryId:uuidv4()

    });

    return workoutCategory
  };

  public getworkoutCategoryRepository = async (workoutCategoryId :string):Promise<any> =>{

    try {
      let workoutCategoryFound  = await workoutCategoryModel.findByPk(workoutCategoryId)
    
      return workoutCategoryFound
    } catch (error) {

      console.log(error)
      
    }
  }

  public getAllworkoutCategoriesRepository = async ():Promise<any> =>{

    try {
      let workoutCategoriessFound  = await workoutCategoryModel.findAll()
    
      return workoutCategoriessFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public upDateworkoutCategoryRepository = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let workoutCategorysFound  = await workoutCategoryModel.update({
        ...updateOptions

      } , {
        where:{
          workoutCategoryId :updateOptions.workoutCategoryId
        }
      })
    
      return workoutCategorysFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public deleteworkoutCategoryRepository = async (workoutCategoryId:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedworkoutCategory  = await workoutCategoryModel.destroy({where:{
        workoutCategoryId:workoutCategoryId
      }})

    
      return deletedworkoutCategory
    } catch (error) {

      console.log(error)
      
    }

  }
}
