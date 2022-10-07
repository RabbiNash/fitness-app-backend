import {Router} from "express"
import workoutCategoryController from "./workoutCategory.controller"

const workoutCategoryRouter  = Router()


workoutCategoryRouter.post("/",new workoutCategoryController().addworkoutCategoryController)
workoutCategoryRouter.get("/:workoutCategoryId", new workoutCategoryController().getworkoutCategoryController)
workoutCategoryRouter.get("/" , new workoutCategoryController().getAllworkoutCategoryController)
workoutCategoryRouter.patch("/" , new workoutCategoryController().upDateworkoutCategoryController)
workoutCategoryRouter.delete("/:workoutCategoryId" , new workoutCategoryController().deleteworkoutCategoryController)




export default workoutCategoryRouter
