// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import ExerciseModel from "./exercise.model"
import { ExerciseClass } from "./exercise.class";
import { v4 as uuidv4 } from "uuid";


export default class exerciseservice {
 

  public addexerciseRepository = async (exerciseOptions: ExerciseClass) :Promise<any> => {
    let exercise = await ExerciseModel.create({
      ...exerciseOptions,
      exerciseId:uuidv4()

    });

    return exercise
  };

  public getexerciseRepository = async (exerciseId :string):Promise<any> =>{

    try {
      let exerciseFound  = await ExerciseModel.findByPk(exerciseId)

     
    
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
          exerciseId :updateOptions.exerciseId
        }
      })
    
      return exercisesFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public deleteexerciseRepository = async (exerciseId:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedexercise  = await ExerciseModel.destroy({where:{
        exerciseId:exerciseId
      }})

    
      return deletedexercise
    } catch (error) {

      console.log(error)
      
    }

  }
}
