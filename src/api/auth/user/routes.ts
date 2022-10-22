import {Router} from "express"
import userController from "./user.controller"

const userRouter = Router()


userRouter.post("/", new userController().addUserController)
userRouter.get("/:Id", new userController().getUserController)
userRouter.get("/", new userController().getAllUserController)
userRouter.patch("/", new userController().upDateUserController)
userRouter.delete("/:Id", new userController().deleteUserController)


export default userRouter
