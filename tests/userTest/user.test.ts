import request from "supertest";
import { UserClass } from "../../src/api/auth/user/user.class";
import app from "../../src/appTest";

describe("test create  user route ", () => {
  test("should have success when created", async () => {
    let user = new UserClass("chicken", "test", "test", "test");

    try {
      const res = await request(app)
        .post("/api/v1/auth/user")
        .send({
          ...user,
        });

      expect(res.body).toHaveProperty("success");
    } catch (error) {
      console.log(error);
    }
  });
});
