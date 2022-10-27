import {Router} from "express"
import workoutCategoryController from "./workoutCategory.controller"

const workoutCategoryRouter  = Router()

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
workoutCategoryRouter.post("/",new workoutCategoryController().addworkoutCategoryController)
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
workoutCategoryRouter.get("/:Id", new workoutCategoryController().getworkoutCategoryController)
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
workoutCategoryRouter.get("/" , new workoutCategoryController().getAllworkoutCategoryController)
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
workoutCategoryRouter.patch("/" , new workoutCategoryController().upDateworkoutCategoryController)


  /**
   * @openapi
   * '/api/v1/workout/category/{workoutCategoryId}':
   *  delete:
   *    tags:
   *      - workoutCategory
   *    summary: Delete workoutCategory by Id
   *    parameters:
   *      - name: workoutCategoryId
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
workoutCategoryRouter.delete("/:Id" , new workoutCategoryController().deleteworkoutCategoryController)




export default workoutCategoryRouter
