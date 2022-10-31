/**this file houses all the api routes from all the APIs */
import {Router} from "express"
import userRoutes from "../auth/user/routes"

const router = Router()
router.use("/user",userRoutes)

export default  router
