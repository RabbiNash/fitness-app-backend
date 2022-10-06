// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import UserModel from "../user/user.model";
import { UserClass } from "./user.class";
import { v4 as uuidv4 } from "uuid";


export default class Userservice {
 

  public addUser = async (userOptions: UserClass) :Promise<Boolean> => {
    let user = await UserModel.create({
      ...userOptions,
      userId:uuidv4()

    });

    return true;
  };

  public getUser = async (userId :string):Promise<any> =>{

    try {
      let userFound  = await UserModel.findByPk(userId)
    
      return userFound
    } catch (error) {

      console.log(error)
      
    }
  }

  public getAllUsers = async ():Promise<any> =>{

    try {
      let usersFound  = await UserModel.findAll()
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public upDateUserRepository = async (updateOptions: { [x: string]: any; }):Promise<any> =>{

    try {
      //return the number of destroyed rows
      let usersFound  = await UserModel.update({
        ...updateOptions

      } , {
        where:{
          userId :updateOptions.userId
        }
      })
    
      return usersFound

    
    } catch (error) {

      console.log(error)
      
    }

  }

  public deleteUserRepository = async (userId:string):Promise<any> =>{
    try {
      //return the number of destroyed rows
      let deletedUser  = await UserModel.destroy({where:{
        userId:userId
      }})

    
      return deletedUser
    } catch (error) {

      console.log(error)
      
    }

  }
}
