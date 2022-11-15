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
const UserController = __importStar(require("./user.controller"));
const userRouter = (0, express_1.Router)();
/**
 * @openapi
 * '/api/v1/auth/user':
 *   post:
 *     tags:
 *       - User
 *     summary: Register a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponce'
 *       409:
 *         description: Conflict
 *       400:
 *         description: Bad request
 */
userRouter.post("/", UserController.addUserController);
/**
 * @openapi
 * '/api/v1/auth/user/{Id}':
 *  get:
 *    tags:
 *      - User
 *    summary: Get user by id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: The id of the product
 *        required: true
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponce'
 *       400:
 *         description: User not found !!
 *
 *
 */
userRouter.get("/:Id", UserController.getUserController);
/**
 * @openapi
 * '/api/v1/auth/user':
 *  get:
 *    tags:
 *      - User
 *    summary: Get all users
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserResponce'
 *       500:
 *         description: Server error !!
 *
 *
 */
userRouter.get("/", UserController.getAllUserController);
/**
 * @openapi
 * '/api/v1/auth/user':
 *   patch:
 *     tags:
 *       - User
 *     summary: Update  user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUser'
 *     responses:
 *       200:
 *         description: User updated Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
userRouter.patch("/", UserController.upDateUserController);
/**
 * @openapi
 * '/api/v1/auth/user/{Id}':
 *  delete:
 *    tags:
 *      - User
 *    summary: Delete user by id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: user Id
 *        required: true
 *    responses:
 *       200:
 *         description: User Successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 *
 *
 */
userRouter.delete("/:Id", UserController.deleteUserController);
exports.default = userRouter;
