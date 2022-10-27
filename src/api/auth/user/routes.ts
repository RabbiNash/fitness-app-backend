import {Router} from "express"
import userController from "./user.controller"

const userRouter  = Router()

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
userRouter.post("/",new userController().addUserController)


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
userRouter.get("/:Id", new userController().getUserController)

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
userRouter.get("/" , new userController().getAllUserController)
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
userRouter.patch("/" , new userController().upDateUserController)

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
userRouter.delete("/:Id" , new userController().deleteUserController)




export default userRouter
