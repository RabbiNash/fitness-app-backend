import request from "supertest"
import { UserClass } from "../../src/api/auth/user/user.class"
import User from "../../src/api/auth/user/user.model"
import appTest from "../../src/appTest"


describe("User Controller Test" , ()  =>{
    /**mock the user model so that it wont interact with db */
    let userModelMock = jest.spyOn(User,"create")
    let user = new UserClass("testDisplayName","testemail.com","testpassword")

    test("Should return a user object",async () => {
        const userCreationRes = await request(appTest).post("/api/v1/auth/user").send({
            ...user
        })

        expect(userCreationRes.body).toHaveProperty("user")
        
    })

})


