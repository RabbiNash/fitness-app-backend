import UserModel from "../user/user.model";
import { UserClass } from "./user.class";

export default class Userservice {
  // static addUser(newUser: UserClass) {
  //     throw new Error("Method not implemented.");
  // }
  // private userService:Userservice

  public addUser = async (userOptions: UserClass) :Promise<Boolean> => {
    let user = await UserModel.create({
      ...userOptions,
      
    });

    return true;
  };
}
