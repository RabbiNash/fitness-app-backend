"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const resources_1 = require("../resources/resources");
describe("User Tests", () => {
    describe("given valid user the model should return the object", () => {
        jest.spyOn(resources_1.User, "create").mockReturnValueOnce(resources_1.userPayLoad);
        test("should have success field in body and user in body when created", () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield (0, resources_1.request)(resources_1.app)
                .post("/api/v1/auth/user")
                .send(Object.assign({}, resources_1.userInput));
            //@ts-ignore
            const { success, user } = yield res.body;
            expect(res.body).toHaveProperty("success");
            expect(success).toBe(true);
            expect(user).toEqual(resources_1.userPayLoad);
        }));
    });
    jest.clearAllMocks();
    describe("When the user model throw", () => {
        test("The status should be 500 and body.success  should be false", () => __awaiter(void 0, void 0, void 0, function* () {
            let mockModelRejection = jest.spyOn(resources_1.User, "create").mockRejectedValue("error");
            const userCreationRes = yield (0, resources_1.request)(resources_1.app)
                .post("/api/v1/auth/user")
                .send(Object.assign({}, resources_1.userInput));
            const { success, msg } = yield userCreationRes.body;
            expect(userCreationRes.statusCode).toBe(500);
            expect(msg).toBe('error');
            expect(success).toBeFalsy;
            expect(mockModelRejection).toHaveBeenCalled();
        }));
    });
});
