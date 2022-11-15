"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exerciseController = __importStar(require("./exercise.controller"));
const exerciseRouter = (0, express_1.Router)();
/**
 * @openapi
 * '/api/v1/workout/exercise':
 *   post:
 *     tags:
 *       - Exercise
 *     summary: Create a Exercise
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExerciseInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExerciseResponse'
 *       500:
 *         description: Server error
 *       400:
 *         description: Bad request
 */
exerciseRouter.post("/", exerciseController.addexerciseController);
/**
 * @openapi
 * '/api/v1/workout/exercise/{Id}':
 *  get:
 *    tags:
 *      - Exercise
 *    summary: Get exercise by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: The Id of the exercise
 *        required: true
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExerciseResponse'
 *       400:
 *         description: exercise not found !!
 *       500:
 *         description: Server error
 *
 *
 */
exerciseRouter.get("/:Id", exerciseController.getexerciseController);
/**
 * @openapi
 * '/api/v1/workout/exercise':
 *  get:
 *    tags:
 *      - Exercise
 *    summary: Get all Exercise by Id
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ExerciseResponse'
 *       500:
 *         description: Server error !!
 *
 *
 */
exerciseRouter.get("/", exerciseController.getAllexerciseController);
/**
 * @openapi
 * '/api/v1/workout/exercise':
 *   patch:
 *     tags:
 *       - Exercise
 *     summary: Update  Exercise
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ExerciseUpdate'
 *     responses:
 *       200:
 *         description: Exercise updated Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
exerciseRouter.patch("/", exerciseController.upDateexerciseController);
/**
 * @openapi
 * '/api/v1/workout/exercise/{Id}':
 *  delete:
 *    tags:
 *      - Exercise
 *    summary: Delete Exercise by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: exercise Id
 *        required: true
 *    responses:
 *       200:
 *         description: Exercise Successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 *
 *
 */
exerciseRouter.delete("/:Id", exerciseController.deleteexerciseController);
exports.default = exerciseRouter;
