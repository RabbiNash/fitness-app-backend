import {Router} from "express"
import exerciseController from "./exercise.controller"

const exerciseRouter  = Router()


exerciseRouter.post("/",new exerciseController().addexerciseController)
exerciseRouter.get("/:Id", new exerciseController().getexerciseController)
exerciseRouter.get("/" , new exerciseController().getAllexerciseController)
exerciseRouter.patch("/" , new exerciseController().upDateexerciseController)
exerciseRouter.delete("/:Id" , new exerciseController().deleteexerciseController)




export default exerciseRouter
