import {Router} from "express"
import * as exerciseController from "./exercise.controller"

const exerciseRouter = Router()


exerciseRouter.post("/", exerciseController.addexerciseController)
exerciseRouter.get("/:Id", exerciseController.getexerciseController)
exerciseRouter.get("/", exerciseController.getAllexerciseController)
exerciseRouter.patch("/", exerciseController.upDateexerciseController)
exerciseRouter.delete("/:Id", exerciseController.deleteexerciseController)


export default exerciseRouter
