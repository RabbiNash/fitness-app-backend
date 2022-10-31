import { Router } from "express";
import workoutTypeController from "./workoutType.controller";

const workoutTypeRouter = Router();

/**
 * @openapi
 * '/api/v1/workout/type':
 *   post:
 *     tags:
 *       - workoutType
 *     summary: Create a WorkoutType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WorkoutTypeInput'
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       500:
 *         description: Server error
 *       400:
 *         description: Bad request
 */
workoutTypeRouter.post(
  "/",
  new workoutTypeController().addworkoutTypeController
);
/**
 * @openapi
 * '/api/v1/workout/type/{Id}':
 *  get:
 *    tags:
 *      - workoutType
 *    summary: Get workoutType by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: The Id of the workoutType
 *        required: true
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       400:
 *         description: workoutType not found !!
 *       500:
 *         description: Server error
 *
 *
 */
workoutTypeRouter.get(
  "/:Id",
  new workoutTypeController().getworkoutTypeController
);

/**
 * @openapi
 * '/api/v1/workout/type':
 *  get:
 *    tags:
 *      - workoutType
 *    summary: Get all workout categories
 *    responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/workoutTypeResponse'
 *       500:
 *         description: Server error !!
 *
 *
 */
workoutTypeRouter.get(
  "/",
  new workoutTypeController().getAllworkoutTypeController
);

/**
 * @openapi
 * '/api/v1/workout/type':
 *   patch:
 *     tags:
 *       - workoutType
 *     summary: Update  workoutType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateWorkoutType'
 *     responses:
 *       200:
 *         description: workoutType updated Successfully
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Server Error
 */
workoutTypeRouter.patch(
  "/",
  new workoutTypeController().upDateworkoutTypeController
);

/**
 * @openapi
 * '/api/v1/workout/type/{Id}':
 *  delete:
 *    tags:
 *      - workoutType
 *    summary: Delete workoutType by Id
 *    parameters:
 *      - name: Id
 *        in: path
 *        description: workoutType Id
 *        required: true
 *    responses:
 *       200:
 *         description: workoutType Successfully deleted
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 *
 *
 */
workoutTypeRouter.delete(
  "/:Id",
  new workoutTypeController().deleteworkoutTypeController
);

export default workoutTypeRouter;
