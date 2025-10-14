import express from "express";
import { getAllManga, getManga, getMangaById, getMangaFeed, getMangaStatistics } from "../controllers/mangadex.controller.js";

const router = express.Router();

router.get('/mangadex', getManga)
router.get('/mangadex/manga', getAllManga)
router.get('/mangadex/feed', getMangaFeed)
router.get('/mangadex/manga/:id', getMangaById)
router.get(`/mangadex/statistics/manga/:id`, getMangaStatistics)

export default router