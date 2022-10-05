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
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: `${error}`,
      });
    }
  };
}
