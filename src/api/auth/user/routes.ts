import {Router} from "express"
import userController from "./user.controller"

const userRouter  = Router()


userRouter.post("/",new userController().addUserController)



export default userRouter
