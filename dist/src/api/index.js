"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./auth/index"));
const index_2 = __importDefault(require("./workout/index"));
const router = (0, express_1.Router)();
router.use("/auth", index_1.default);
router.use("/workout", index_2.default);
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
exports.default = router;
