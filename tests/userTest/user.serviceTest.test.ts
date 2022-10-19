/**
 * Test file for user services
 */

import request  from "supertest"
import { UserClass } from "../../src/api/auth/user/user.class"
import Userservice from "../../src/api/auth/user/user.service"
import appTest from "../../src/appTest"


describe("User service Test",() =>{

    let userInstance = new UserClass("testDisplayName3","testemail.com","testpassword")


    jest.spyOn(new Userservice , "addUser").mockImplementation(async ()  => {
        return {
            display:"chickenName"
        }
        
    })

    test("should return a user given all user options",async () => {
        const userCreation = await request(appTest).post("/api/v1/auth/user").send({
            ...userInstance
        })


        console.log(userCreation)
        
    })
})