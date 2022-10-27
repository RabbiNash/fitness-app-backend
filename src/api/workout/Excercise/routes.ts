import {Router} from "express"
import * as exerciseController from "./exercise.controller"

const exerciseRouter  = Router()

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
exerciseRouter.post("/",exerciseController.addexerciseController)
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
exerciseRouter.get("/:Id", exerciseController.getexerciseController)

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
exerciseRouter.get("/" , exerciseController.getAllexerciseController)
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
exerciseRouter.patch("/" ,  exerciseController.upDateexerciseController)


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

exerciseRouter.delete("/:Id" ,  exerciseController.deleteexerciseController)




export default exerciseRouter
