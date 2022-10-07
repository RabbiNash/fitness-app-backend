import {Router} from "express"
import authRoutes from "./auth/index"
import workoutsRoutes from "./workout/index"
const router = Router()

router.use("/auth",authRoutes)
router.use("/workout",workoutsRoutes)




router.get("/", (req, res)=>{
    return res.json({
        message:"fitness app is up and running"
    })
})


export default router;