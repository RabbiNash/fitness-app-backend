import {Router} from "express"
import workoutCategoryController from "./workoutCategory.controller"

const workoutCategoryRouter = Router()


workoutCategoryRouter.post("/", new workoutCategoryController().addworkoutCategoryController)
workoutCategoryRouter.get("/:Id", new workoutCategoryController().getworkoutCategoryController)
workoutCategoryRouter.get("/", new workoutCategoryController().getAllworkoutCategoryController)
workoutCategoryRouter.patch("/", new workoutCategoryController().upDateworkoutCategoryController)
workoutCategoryRouter.delete("/:Id", new workoutCategoryController().deleteworkoutCategoryController)


export default workoutCategoryRouter
