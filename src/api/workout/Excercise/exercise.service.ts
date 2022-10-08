// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import ExerciseModel from "./exercise.model"
import { ExerciseClass } from "./exercise.class";
import { v4 as uuidv4 } from "uuid";


export default class exerciseservice {
 

  public addexerciseRepository = async (exerciseOptions: ExerciseClass) :Promise<any> => {
    let exercise = await ExerciseModel.create({
      ...exerciseOptions,
      Id:uuidv4()

    });

    return exercise
  };

  public getexerciseRepository = async (Id :string):Promise<any> =>{

    try {
      let exerciseFound  = await ExerciseModel.findByPk(Id)

     
    
      return exerciseFound
    } catch (error) {

      console.log(error)
      
    }
  }

  public getAllworkoutCategoriesRepository = async ():Promise<any> =>{

    try {
      let workoutCategoriessFound  = await ExerciseModel.findAll()
    
      return workoutCategoriessFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public upDateexerciseRepository = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let exercisesFound  = await ExerciseModel.update({
        ...updateOptions

      } , {
        where:{
          Id :updateOptions.Id
        }
      })
    
      return exercisesFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public deleteexerciseRepository = async (Id:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedexercise  = await ExerciseModel.destroy({where:{
        Id:Id
      }})

    
      return deletedexercise
    } catch (error) {

      console.log(error)
      
    }

  }
}
