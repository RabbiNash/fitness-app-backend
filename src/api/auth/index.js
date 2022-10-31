"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**this file houses all the api routes from all the APIs */
const express_1 = require("express");
const routes_1 = __importDefault(require("../auth/user/routes"));
const router = (0, express_1.Router)();
router.use("/user", routes_1.default);
exports.default = router;
