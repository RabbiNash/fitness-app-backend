import {Router} from "express"
import workoutCatergoryRoutes from "./WorkoutCategory/routes"

const router = Router()
router.use("/category",workoutCatergoryRoutes)

export default  router