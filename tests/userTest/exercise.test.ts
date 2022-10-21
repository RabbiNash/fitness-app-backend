/** This file contains the tests onthe creattion of a workout */

import * as exerciseservice from "../../src/api/workout/Excercise/exercise.service";
import {
  app,
  exerciseInput,
  request,
} from "../resources/resources";

describe("Exersise controllers  Tests", () => {
  describe("given all the properties the controller should return  success, message ,and exercise object", () => {
    //@ts-ignore
    let exerciseServiceMock = jest
      .spyOn(exerciseservice, "addexerciseRepository")
      .mockResolvedValueOnce(exerciseInput);

    test("should have success , msg,exercise  fields in body", async () => {
      let exerciseCreationRes = await request(app)
        .post("/api/v1/workout/exercise")
        .send({
          ...exerciseInput,
        });
      const { success, msg, exercise } = await exerciseCreationRes.body;

      expect(success).toBe(true);
      expect(exercise).toBeTruthy;
      expect(msg).toBeTruthy;
    });
  });

  describe("given missing properties the controller should return  success, message ,and missingParams", () => {
    //@ts-ignore
    let exerciseServiceMock = jest
      .spyOn(exerciseservice, "addexerciseRepository")
      .mockResolvedValueOnce(exerciseInput);

    test("should have success , msg,exercise  fields in body", async () => {
      let exerciseCreationRes = await request(app)
        .post("/api/v1/workout/exercise")
        .send({
            field:"The object is empty "
          
        });
      const { success, msg, missingParams } = await exerciseCreationRes.body;

      expect(success).toBe(false);
      console.log(missingParams)
      
      expect(msg).toBe("The following params are required");
      expect(missingParams).toBeInstanceOf(Array)
  

 
    });
  });


});
