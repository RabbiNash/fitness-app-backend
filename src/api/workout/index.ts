import {Router} from "express"
import workoutCatergoryRoutes from "./WorkoutCategory/routes"
import workoutTypeRoutes from "./WorkoutType/routes"

const router = Router()
router.use("/category",workoutCatergoryRoutes)
router.use("/type",workoutTypeRoutes)

export default  router