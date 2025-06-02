import express from "express";
import URL from "../models/url.js";

const router = express.Router();

router.get("/", async (req,res)=> {
    const allUrls = await URL.find({});
    res.render('home', {
        urls:allUrls
    });
});

export default router;
