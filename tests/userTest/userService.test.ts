import {app, userPayLoad, userInput, User, request} from "../resources/resources"

describe("User Tests", () => {
    describe("given valid user the model should return the object", () => {
        jest.spyOn(User, "create").mockReturnValueOnce(userPayLoad)
        test("should have success field in body and user in body when created", async () => {

            const res = await request(app)
                .post("/api/v1/auth/user")
                .send({
                    ...userInput
                });

            //@ts-ignore
            const {success, user} = await res.body

            expect(res.body).toHaveProperty("success");
            expect(success).toBe(true)
            expect(user).toEqual(userPayLoad)
        });
    });

    jest.clearAllMocks()

    describe("When the user model throw", () => {
        test("The status should be 500 and body.success  should be false", async () => {
            let mockModelRejection = jest.spyOn(User, "create").mockRejectedValue("error")
            const userCreationRes = await request(app)
                .post("/api/v1/auth/user")
                .send({
                    ...userInput
                });
            const {success, msg} = await userCreationRes.body
            expect(userCreationRes.statusCode).toBe(500)
            expect(msg).toBe('error')
            expect(success).toBeFalsy
            expect(mockModelRejection).toHaveBeenCalled()
        })
    })
});
