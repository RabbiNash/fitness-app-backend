import { Request, Response } from "express";

import { UserClass } from "./user.class";
import * as Userservice from "./user.service";

export const addUserController = async (req: Request, res: Response) => {
  const { displayName, email, password, photoURL } = req.body;
  let newUser = new UserClass(displayName, email, password, photoURL);

  try {
    let userResult = await Userservice.addUser(newUser);

    return res.json({
      success: true,
      user: userResult,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

//get user by id
export const getUserController = async (req: Request, res: Response) => {
  const { Id } = req.params;

  // console.log(Id)
  try {
    let userFound = await Userservice.getUser(Id);

    if (userFound == null) {
      return res.status(400).json({
        success: false,
        msg: "No entry was found please provide a valid userId!!",
      });
    }

    return res.json({
      success: true,
      user: userFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const getAllUserController = async (req: Request, res: Response) => {
  try {
    let usersFound = await Userservice.getAllUsers();

    return res.json({
      success: true,
      users: usersFound,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
export const upDateUserController = async (req: Request, res: Response) => {
  try {
    let userUpdateResults = await Userservice.upDateUserRepository({
      ...req.body,
    });

    console.log(userUpdateResults);

    if (userUpdateResults[0] !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was updated please provide a valid userId !!",
      });
    }

    return res.json({
      success: true,
      msg: "user was successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { Id } = req.params;
  try {
    let userDeleteResults = await Userservice.deleteUserRepository(Id);

    if (userDeleteResults !== 1) {
      return res.status(400).json({
        success: false,
        msg: "No entry was deleted please provide a valid userId !!",
      });
    }

    return res.json({
      success: true,
      msg: "Entry  was successfully deleted  ",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: `${error}`,
    });
  }
};
