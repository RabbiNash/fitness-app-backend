// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import workoutTypeModel from "../workoutType/workoutType.model";
import { workoutTypeClass } from "./workoutType.class";
import { v4 as uuidv4 } from "uuid";


export default class workoutTypeservice {
 

  public addworkoutTypeRepository = async (workoutTypeOptions: workoutTypeClass) :Promise<any> => {
    let workoutType = await workoutTypeModel.create({
      ...workoutTypeOptions,
      workoutTypeId:uuidv4()

    });

    return workoutType
  };

  public getworkoutTypeRepository = async (workoutTypeId :string):Promise<any> =>{

    try {
      let workoutTypeFound  = await workoutTypeModel.findByPk(workoutTypeId)

     
    
      return workoutTypeFound
    } catch (error) {

      console.log(error)
      
    }
  }

  public getAllworkoutCategoriesRepository = async ():Promise<any> =>{

    try {
      let workoutCategoriessFound  = await workoutTypeModel.findAll()
    
      return workoutCategoriessFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public upDateworkoutTypeRepository = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let workoutTypesFound  = await workoutTypeModel.update({
        ...updateOptions

      } , {
        where:{
          workoutTypeId :updateOptions.workoutTypeId
        }
      })
    
      return workoutTypesFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public deleteworkoutTypeRepository = async (workoutTypeId:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedworkoutType  = await workoutTypeModel.destroy({where:{
        workoutTypeId:workoutTypeId
      }})

    
      return deletedworkoutType
    } catch (error) {

      console.log(error)
      
    }

  }
}
