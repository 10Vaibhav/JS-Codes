import express from "express";
import { handleAnalytics, handleGenerateNewShortURL, handleGetAnalytics } from "../controllers/url.js";

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/:shortId", handleAnalytics)

export default router;

