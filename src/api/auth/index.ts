/**this file houses all the api routes from all the APIs */
import {Router} from "express"
import userRoutes from "../auth/user/routes"

const router = Router()
<<<<<<< HEAD
router.use("/user", userRoutes)

export default router
=======
router.use("/user",userRoutes)

export default  router
>>>>>>> actions2
