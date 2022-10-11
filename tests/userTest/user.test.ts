import request from "supertest";
import { UserClass } from "../../src/api/auth/user/user.class";
import User from "../../src/api/auth/user/user.model";
import userController from "../../src/api/auth/user/user.controller";

import app from "../../src/appTest";
import Userservice from "../../src/api/auth/user/user.service";

describe("test create  user route ", () => {
  var promise = Promise.resolve(false);


  let userModelMock = jest.spyOn(User, "create").mockReturnValue("false");
  let userServiceMock = jest.spyOn(new Userservice, "addUser").mockReturnValue(promise)
  let user = new UserClass("chicken2222", "test", "test", "test");


  test("should have success when created", async () => {
    let user = new UserClass("chicken2222", "test", "test", "test");


    const res = await request(app)
      .post("/api/v1/auth/user")
      .send({
        ...user,
      });

    expect(res.body).toHaveProperty("success");
  });

  test("user model should be called once ", async () => {
    expect(userModelMock).toHaveBeenCalledTimes(1);
  });
  test("AddUser Service to have default return value of true ", async () => {
    
    
    expect(await  new Userservice().addUser(user)).toBe(false)
  });
});
