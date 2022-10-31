// import { IdGenerator } from "../../../helpers/helper.IDgenerator.js";
import UserModel from "./usermodel";
import { UserClass } from "./user.class";
import { v4 as uuidv4 } from "uuid";

export default class Userservice {
  public addUser = async (userOptions: UserClass): Promise<any> => {
    let user = await UserModel.create({
      ...userOptions,
      Id: uuidv4(),
    });

    return user;
  };

  public getUser = async (Id: string): Promise<any> => {
    try {
      let userFound = await UserModel.findByPk(Id);

      return userFound;
    } catch (error) {
      console.log(error);
    }
  };

  public getAllUsers = async (): Promise<any> => {
    try {
      let usersFound = await UserModel.findAll();

      return usersFound;
    } catch (error) {
      console.log(error);
    }
  };

  public upDateUserRepository = async (updateOptions: {
    [x: string]: any;
  }): Promise<any> => {
    try {
      //return the number of destroyed rows
      let usersFound = await UserModel.update(
        {
          ...updateOptions,
        },
        {
          where: {
            Id: updateOptions.Id,
          },
        }
      );

      return usersFound;
    } catch (error) {
      console.log(error);
    }
  };

  public deleteUserRepository = async (Id: string): Promise<any> => {
    try {
      //return the number of destroyed rows
      let deletedUser = await UserModel.destroy({
        where: {
          Id: Id,
        },
      });

      return deletedUser;
    } catch (error) {
      console.log(error);
    }
  };
}
