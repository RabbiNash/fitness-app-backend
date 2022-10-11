import { Request, Response } from "express";

import { UserClass } from "./user.class";
import Userservice from "./user.service";

export default class userController {
  
  private userservice: Userservice;

  constructor(){
    this.userservice = new Userservice()
  }

  public addUserController = async (req: Request, res: Response) => {
    const { displayName, email, password, photoURL } = req.body;
    let newUser = new UserClass(displayName, email, password, photoURL);
    
    try {
      let userResult = await this.userservice.addUser(newUser);

      return res.json({
        success: true,
        user:userResult

      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };


  //get user by id
  public getUserController = async (req: Request, res: Response) => {
    const { Id } = req.params
    
    // console.log(Id)
    try {

      let userFound = await this.userservice.getUser(Id)

      if( userFound == null){
        return res.status(400).json({
          success:false,
          msg:"No entry was found please provide a valid userId!!"
        })

      }
      

      return res.json({
        success: true,
        user:userFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public getAllUserController = async (req: Request, res: Response) => {
 
   
    
    try {

      let usersFound = await this.userservice.getAllUsers()
      

      return res.json({
        success: true,
        users:usersFound
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
  public upDateUserController = async (req: Request, res: Response) => {

    try {

      let userUpdateResults = await this.userservice.upDateUserRepository({...req.body})

      if( userUpdateResults[0] !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was updated please provide a valid userId !!"
        })

      }

      return res.json({
        success: true,
        msg:"user was successfully updated "
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };

  public deleteUserController = async (req: Request, res: Response) => {

    const { Id } = req.params
    try {

      let userDeleteResults = await this.userservice.deleteUserRepository(Id)


    

     

      if( userDeleteResults !== 1 ){
        return res.status(400).json({
          success:false,
          msg:"No entry was deleted please provide a valid userId !!"
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
