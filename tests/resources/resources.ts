import request from "supertest";
import { UserClass } from "../../src/api/auth/user/user.class";
import User from "../../src/api/auth/user/user.model";
import { ExerciseClass } from "../../src/api/workout/Excercise/exercise.class";
import app from "../../src/appTest";
import * as exerciseController from "../../src/api/workout/Excercise/exercise.controller";

/**
 * command to run the test for this file
 * npm t --userTest/user.test.ts
 */

const userInput = new UserClass("chicken2222", "test", "test", "test");
const userPayLoad = {
  success: true,
  user: {
    displayName: "chicken2222",
    email: "test",
    password: "test",
    photoURL: "test",
    Id: "769b33f1-3e90-4b20-9776-79ee5f2cbb03",
    updatedAt: "2022-10-20T10:15:11.865Z",
    createdAt: "2022-10-20T10:15:11.865Z",
  },
};

let exerciseInput = new ExerciseClass(
  "blackMhofu",
  "Here are some notes about this workout type..",
  67,
  4,
  5,
  5,
  "cf5631e5-d5dc-4f52-9a07-de6a63fbebdc",
  "6c37b303-ac2f-475a-9b14-f7308ccf77a8"
);
const exercisePayload = {
  success: true,
  msg: "exercise was successfully created !! ",
  exercise: {
    exerciseName: "blackmhofu",
    exerciseNotes: "Here are some notes about this workout type..",
    weight: 67,
    reps: 4,
    duration: 5,
    distance: 5,
    userId: "cf5631e5-d5dc-4f52-9a07-de6a63fbebdc",
    workoutTypeId: "c3a22002-0d58-4fae-b3ab-5d28b7a25f42",
    Id: "6c37b303-ac2f-475a-9b14-f7308ccf77a8",
    updatedAt: "2022-10-20T12:54:43.541Z",
    createdAt: "2022-10-20T12:54:43.541Z",
  },
};

export {
     app, 
     userPayLoad,
      userInput, 
      User, 
      request, 
      exerciseInput,
      exercisePayload,
      ExerciseClass,
      exerciseController
     };
