import {Router} from "express"
import workoutCatergoryRoutes from "./WorkoutCategory/routes"
import workoutTypeRoutes from "./WorkoutType/routes"
import exerciseRoutes from "./Excercise/routes"

const router = Router()
router.use("/category", workoutCatergoryRoutes)
router.use("/type", workoutTypeRoutes)
router.use("/exercise", exerciseRoutes)

export default router