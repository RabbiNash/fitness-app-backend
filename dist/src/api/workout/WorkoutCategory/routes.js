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
const workoutCategoryController = __importStar(require("./workoutCategory.controller"));
const workoutCategoryRouter = (0, express_1.Router)();
/**
 * @openapi
 * '/api/v1/workout/category':
 *   post:
 *     tags:
 *       - workoutCategory
 *     summary: Create a WorkoutCategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkoutCategoryInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutCategoryResponse'
 *       500:
 *         description: Server error
 *       400:
 *         description: Bad request
 */
workoutCategoryRouter.post("/", workoutCategoryController.addworkoutCategoryController);
/**
 * @openapi
 * '/api/v1/workout/category/{Id}':
 *  get:
 *    tags:
 *      - workoutCategory
 *    summary: Get workoutCategory by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: The Id of the workoutCategory
 *        required: true
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutCategoryResponse'
 *       400:
 *         description: workoutCategory not found !!
 *       500:
 *         description: Server error
 *
 *
 */
workoutCategoryRouter.get("/:Id", workoutCategoryController.getworkoutCategoryController);
/**
 * @openapi
 * '/api/v1/workout/category':
 *  get:
 *    tags:
 *      - workoutCategory
 *    summary: Get all workout categories
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutCategoryResponse'
 *       500:
 *         description: Server error !!
 *
 *
 */
workoutCategoryRouter.get("/", workoutCategoryController.getAllworkoutCategoryController);
/**
 * @openapi
 * '/api/v1/workout/category':
 *   patch:
 *     tags:
 *       - workoutCategory
 *     summary: Update  workoutCategory
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateWorkoutCategory'
 *     responses:
 *       200:
 *         description: workoutCategory updated Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
workoutCategoryRouter.patch("/", workoutCategoryController.upDateworkoutCategoryController);
/**
 * @openapi
 * '/api/v1/workout/category/{Id}':
 *  delete:
 *    tags:
 *      - workoutCategory
 *    summary: Delete workoutCategory by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: workoutCategory Id
 *        required: true
 *    responses:
 *       200:
 *         description: workoutCategory Successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 *
 *
 */
workoutCategoryRouter.delete("/:Id", workoutCategoryController.deleteworkoutCategoryController);
exports.default = workoutCategoryRouter;
