import UserModel from "../user/user.model";
import { UserClass } from "./user.class";

export default class Userservice {
  // private userService:Userservice

  public addUser = async (userOptions: UserClass) :Promise<Boolean> => {
    let user = await UserModel.create({
      ...userOptions,
    });

    return true;
  };
}
