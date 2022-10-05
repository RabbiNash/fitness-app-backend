import {Router} from "express"
import authRoutes from "./auth/index"
const router = Router()

router.use("/auth",authRoutes)




router.get("/", (req, res)=>{
    return res.json({
        message:"fitness app is up and running"
    })
})


export default router;