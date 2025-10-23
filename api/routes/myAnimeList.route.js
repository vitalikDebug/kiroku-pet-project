import express from "express";
import { getAnimeList } from "../controllers/myAnimeList.controller.js";


const router = express.Router()

router.get("/anime/list", getAnimeList)

export default router