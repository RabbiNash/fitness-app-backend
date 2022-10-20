/** This file contains the tests onthe creattion of a workout */

import * as exerciseservice from "../../src/api/workout/Excercise/exercise.service";
import { app, exerciseController, exercisePayload, exerciseInput, request } from "../resources/resources";

describe("Exersise controllers  Tests" , () => {

    describe('given all the properties the controller should return  success, message ,and exercise object', () => { 
        //@ts-ignore
        let exerciseServiceMock = jest.spyOn( exerciseservice ,"addexerciseRepository").mockResolvedValueOnce(exercisePayload)

        test('should have success , msg,exercise  fields in body', async() => { 
            let exerciseCreationRes = await request(app).post("/api/v1/workout/exercise").send({
                ...exerciseInput
            })
            const {success, msg,exercise} =exerciseCreationRes.body


            expect(exerciseServiceMock).toHaveBeenCalledTimes(1)
         })



    })
})

