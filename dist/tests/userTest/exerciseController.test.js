"use strict";
/** This file contains the tests onthe creattion of a workout */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const exerciseservice = __importStar(require("../../src/api/workout/Excercise/exercise.service"));
const resources_1 = require("../resources/resources");
describe("Exersise controllers  Tests", () => {
    describe("given all the properties the controller should return  success, message ,and exercise object", () => {
        //@ts-ignore
        let exerciseServiceMock = jest
            .spyOn(exerciseservice, "addexerciseRepository")
            .mockResolvedValueOnce(resources_1.exerciseInput);
        test("should have success:true , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
            let exerciseCreationRes = yield (0, resources_1.request)(resources_1.app)
                .post("/api/v1/workout/exercise")
                .send(Object.assign({}, resources_1.exerciseInput));
            const { success, msg, exercise } = yield exerciseCreationRes.body;
            expect(success).toBe(true);
            expect(exercise).toBeTruthy;
            expect(msg).toBeTruthy;
        }));
    });
    describe("given missing properties when the controller is called then it  should return  success:false, message ,and missingParams", () => {
        //@ts-ignore
        let exerciseServiceMock = jest
            .spyOn(exerciseservice, "addexerciseRepository")
            .mockResolvedValueOnce(resources_1.exerciseInput);
        test("should have success :false , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
            let exerciseCreationRes = yield (0, resources_1.request)(resources_1.app)
                .post("/api/v1/workout/exercise")
                .send({
                field: "The object is empty ",
            });
            const { success, msg, missingParams } = yield exerciseCreationRes.body;
            expect(success).toBe(false);
            expect(msg).toBe("The following params are required");
            expect(missingParams).toBeInstanceOf(Array);
        }));
    });
    describe("When the service throws", () => {
        //@ts-ignore
        let exerciseServiceMock = jest
            .spyOn(exerciseservice, "addexerciseRepository")
            .mockRejectedValueOnce("I cant move !!!!");
        test("should be false", () => __awaiter(void 0, void 0, void 0, function* () {
            let exerciseCreationRes = yield (0, resources_1.request)(resources_1.app)
                .post("/api/v1/workout/exercise")
                .send(Object.assign({}, resources_1.exerciseInput));
            const { success, msg } = yield exerciseCreationRes.body;
            /**
             * Body to be implemented
             */
        }));
    });
    /**
     * test case  2 :
     * 1.get an existing exercise
     * 2.get a non existing
     */
    describe("Fetching Exercise !!!! ", () => {
        describe("given the exerciseId", () => {
            //@ts-ignore
            let exerciseServiceMock = jest
                .spyOn(exerciseservice, "getexerciseRepository")
                .mockResolvedValueOnce(resources_1.exerciseInput);
            test("should have success , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
                let exerciseCreationRes = yield (0, resources_1.request)(resources_1.app)
                    .get("/api/v1/workout/exercise/6c37b303-ac2f-475a-9b14-f7308ccf77a8")
                    .send(Object.assign({}, resources_1.exerciseInput));
                const { exercise } = yield exerciseCreationRes.body;
                expect(exercise).toBeTruthy;
            }));
        });
        test("with invalid id  should return false", () => __awaiter(void 0, void 0, void 0, function* () {
            let exerciseCreationRes = yield (0, resources_1.request)(resources_1.app)
                .get("/api/v1/workout/exercise/6c37b303-ac2f-475a-9b14-f7308ccf77a8")
                .send(Object.assign({}, resources_1.exerciseInput));
            const { success } = yield exerciseCreationRes.body;
            expect(success).toBeFalsy;
        }));
    });
    /**
     * Test case 3: updating the exercise
     *
     */
    describe("Deleting  Exercises !!!! ", () => {
        describe("given valid exerciseId", () => {
            //@ts-ignore
            let exerciseServiceMock = jest
                .spyOn(exerciseservice, "deleteexerciseRepository")
                .mockResolvedValueOnce(1);
            // return  value of  1 means deleted
            test("should have success :true , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
                let exerciseDeletionRes = yield (0, resources_1.request)(resources_1.app).delete("/api/v1/workout/exercise/6112d1b8-2ded-4b5f-8923-70144852d18a");
                const { success, msg } = yield exerciseDeletionRes.body;
                // expect(success).toBe(true);ToDo
                // expect(msg).toBe("Entry  was successfully deleted");ToDo
            }));
        });
        describe("given Invalid exerciseId", () => {
            //@ts-ignore
            let exerciseServiceMock = jest
                .spyOn(exerciseservice, "deleteexerciseRepository")
                .mockResolvedValueOnce(0);
            // return  value of  0 means no deleted
            test("should have success :false , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
                let exerciseDeletionRes = yield (0, resources_1.request)(resources_1.app).delete("/api/v1/workout/exercise/6112d1b8-2ded-4b5f-8923-70144852d18a");
                const { success, msg } = yield exerciseDeletionRes.body;
                expect(success).toBe(false);
                expect(msg).toBe("No entry was deleted please provide a valid exerciseId !!");
            }));
        });
    });
    /**
     * Test case 4  :Updating the exercise
     */
    describe("Upadating  Exercises !!!! ", () => {
        describe("given valid exerciseId", () => {
            //@ts-ignore
            let exerciseServiceMock = jest
                .spyOn(exerciseservice, "upDateexerciseRepository")
                .mockResolvedValueOnce([0]);
            // return  value of  1 means updating
            test("should have success , msg  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
                let exerciseUpadateRes = yield (0, resources_1.request)(resources_1.app)
                    .patch("/api/v1/workout/exercise")
                    .send(Object.assign({}, resources_1.exerciseInstance));
                const { success, msg } = yield exerciseUpadateRes.body;
                expect(exerciseUpadateRes.body).toHaveProperty("success");
                expect(exerciseUpadateRes.body).toHaveProperty("msg");
            }));
        });
        describe("given Invalid exerciseId", () => {
            //@ts-ignore
            let exerciseServiceMock = jest
                .spyOn(exerciseservice, "upDateexerciseRepository")
                .mockResolvedValueOnce([0]);
            test("should have success :false , msg,exercise  fields in body", () => __awaiter(void 0, void 0, void 0, function* () {
                let exerciseDeletionRes = yield (0, resources_1.request)(resources_1.app).patch("/api/v1/workout/exercise/");
                const { success, msg } = yield exerciseDeletionRes.body;
                expect(success).toBe(false);
                // expect(msg).toBe("No entry was updated please provide a valid exerciseId !!"); ToDo
            }));
        });
    });
});
