import { Router } from "express";
import { getData,returnData } from "../controller/user.controller.js";
const router = Router();

router.route("/bfhl").post(getData);
router.route("/bfhl").get(returnData);

export default router;