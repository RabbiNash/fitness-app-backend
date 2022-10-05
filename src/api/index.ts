import {Router} from "express"
const router = Router()


router.get("/", (req, res)=>{
    return res.json({
        message:"fitness app is up and running"
    })
})


export default router;