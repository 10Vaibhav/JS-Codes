import { nanoid } from "nanoid";
import URL from "../models/url.js"

export async function handleGenerateNewShortURL (req, res) {

    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'});

    const shortId = nanoid(8);
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    });

    return res.render('home', {
        id: shortId
    })
};

export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

export async function handleAnalytics(req, res){
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory:{
            timestamp: Date.now()
        }
    },}); 

    res.redirect(entry.redirectURL);
}

