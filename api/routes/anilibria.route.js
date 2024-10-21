import express from "express";
import { getSchedule, getTitleById } from "../controllers/anilibria.controller.js";


const router = express.Router();

router.get("/anilibria/title/schedule", getSchedule)
router.get("/anilibria/title/:id", getTitleById)

export default router