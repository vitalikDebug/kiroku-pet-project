import express from "express";
import { getAllManga, getManga, getMangaById, getMangaChapters, getMangaCover, getMangaFeed } from "../controllers/mangadex.controller.js";

const router = express.Router();

router.get('/mangadex', getManga)
router.get('/mangadex/manga', getAllManga)
router.get('/mangadex/feed', getMangaFeed)
router.get('/mangadex/chapter', getMangaChapters)
router.get('/mangadex/cover', getMangaCover)
router.get('/mangadex/manga/id', getMangaById)

export default router