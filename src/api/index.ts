import { Router } from "express";
import authRoutes from "./auth/index";
import workoutsRoutes from "./workout/index";
const router = Router();

router.use("/auth", authRoutes);
router.use("/workout", workoutsRoutes);

/**
 * @openapi
 * /api/v1/:
 *   get:
 *     tags:
 *       - server-health
 *     description: Respose when the app is up mand running
 *     responses:
 *       200:
 *         description: The app is up and running.
 */

router.get("/", (req, res) => {
  return res.json({
    message: "fitness app is up and running",
  });
});

export default router;
