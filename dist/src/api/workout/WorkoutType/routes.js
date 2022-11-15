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
const WorkoutTypeController = __importStar(require("./workoutType.controller"));
const workoutTypeRouter = (0, express_1.Router)();
/**
 * @openapi
 * '/api/v1/workout/type':
 *   post:
 *     tags:
 *       - workoutType
 *     summary: Create a WorkoutType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkoutTypeInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       500:
 *         description: Server error
 *       400:
 *         description: Bad request
 */
workoutTypeRouter.post("/", WorkoutTypeController.addworkoutTypeController);
/**
 * @openapi
 * '/api/v1/workout/type/{Id}':
 *  get:
 *    tags:
 *      - workoutType
 *    summary: Get workoutType by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: The Id of the workoutType
 *        required: true
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       400:
 *         description: workoutType not found !!
 *       500:
 *         description: Server error
 *
 *
 */
workoutTypeRouter.get("/:Id", WorkoutTypeController.getworkoutTypeController);
/**
 * @openapi
 * '/api/v1/workout/type':
 *  get:
 *    tags:
 *      - workoutType
 *    summary: Get all workout categories
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       500:
 *         description: Server error !!
 *
 *
 */
workoutTypeRouter.get("/", WorkoutTypeController.getAllworkoutTypeController);
/**
 * @openapi
 * '/api/v1/workout/type':
 *   patch:
 *     tags:
 *       - workoutType
 *     summary: Update  workoutType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateWorkoutType'
 *     responses:
 *       200:
 *         description: workoutType updated Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
workoutTypeRouter.patch("/", WorkoutTypeController.upDateworkoutTypeController);
/**
 * @openapi
 * '/api/v1/workout/type/{Id}':
 *  delete:
 *    tags:
 *      - workoutType
 *    summary: Delete workoutType by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: workoutType Id
 *        required: true
 *    responses:
 *       200:
 *         description: workoutType Successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 *
 *
 */
workoutTypeRouter.delete("/:Id", WorkoutTypeController.deleteworkoutTypeController);
exports.default = workoutTypeRouter;
