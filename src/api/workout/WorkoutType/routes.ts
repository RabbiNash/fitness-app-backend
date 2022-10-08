import {Router} from "express"
import workoutTypeController from "./workoutType.controller"

const workoutTypeRouter  = Router()


workoutTypeRouter.post("/",new workoutTypeController().addworkoutTypeController)
workoutTypeRouter.get("/:Id", new workoutTypeController().getworkoutTypeController)
workoutTypeRouter.get("/" , new workoutTypeController().getAllworkoutTypeController)
workoutTypeRouter.patch("/" , new workoutTypeController().upDateworkoutTypeController)
workoutTypeRouter.delete("/:Id" , new workoutTypeController().deleteworkoutTypeController)




export default workoutTypeRouter
