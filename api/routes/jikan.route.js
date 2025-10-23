import express from "express";
import { getAnimeFullById, getCharacters } from "../controllers/jikan.controller.js";


const router = express.Router();

router.get("/jikan/characters", getCharacters)
router.get("/anime/full", getAnimeFullById)


export default router