import request from "supertest"
import { UserClass } from "../../src/api/auth/user/user.class"
import User from "../../src/api/auth/user/user.model"
import appTest from "../../src/appTest"


describe("User Controller Test" , ()  =>{
    /**mock the user model so that it wont interact with db */
    let userInstance = new UserClass("testDisplayName3","testemail.com","testpassword")
    let userModelMock = jest.spyOn(User,"create").mockImplementation(async ():Promise<any> =>{
        return {
            success:"true",
            user:userInstance
        }
    })

    // jest.spyOn(User,"findByPk").mockImplementation(async ():Promise<any> =>{
    //     return {
    //         success:true,
    //         user:userInstance
    //     }
    // })

    jest.spyOn(User,"destroy").mockImplementation(async ():Promise<any> =>{
        return {
            success:true,
            msg:"Entry  was successfully deleted"
        }
    })

    jest.spyOn(User , "update").mockImplementation(async ():Promise<any> =>{
        return Promise.resolve({
            success:true,
            msg:"user was successfully updated "
        })
    })

    


    test("Should return a user object",async () => {
        const userCreationRes = await request(appTest).post("/api/v1/auth/user").send({
            ...userInstance
        })

        expect(userCreationRes.body).toHaveProperty("user")
        
    })

    /**test case 2 :retriving  a user using id */

    test("get user given userId" ,async () => {
        const getUserBYPk = await request(appTest).get("/api/v1/auth/user/b71489e0-9f82-44b7-890d-58862c3c74c8")
        let {success ,msg} =   getUserBYPk.body

        // console.log(success,msg)

        expect(success).toBe(false)

    })

    /**test case 3 :  */
    test("delete user given userId " ,async () => {
        const deleteUserBYPk = await request(appTest).delete("/api/v1/auth/user/f93389d3-be30-4226-8b47-1c3796927bfb")
        let {success ,msg} =   deleteUserBYPk.body

        console.log(success,msg)

        expect(success).toBe(false)

    })

    /**test case 4 UpDate user */

    test("update user given userId" , async () => {
        // const updateUserBYPk = await request(appTest).patch("/api/v1/auth/user/f93389d3-be30-4226-8b47-1c3796927bfb")
        let updateOptions = {
            Id:'f93389d3-be30-4226-8b47-1c3796927bfb',
            displayName:"newName",
            email:"newemail@gmail.com",
            photoURL:"newPhotoUrl"
        }

        const userUpdate = await User.update({
            ...updateOptions
    
          } , {
            where:{
              Id :updateOptions.Id
            }
          })
          
          expect(userUpdate).toHaveProperty("success")
    

        
    })


})


