import express from "express";
import urlRouter from "./routes/url.js"
import connectToMongoDB from "./connect.js";
import dotenv from "dotenv";
import URL from "./models/url.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/url", urlRouter);

connectToMongoDB(process.env.db_connection).then(()=> {
    console.log("MongoDB connected");
})

app.get("/:shortId", async (req, res)=> {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory:{
            timestamp: Date.now()
        }
    },});

    res.redirect(entry.redirectURL);
})

app.listen(3000, ()=> {
    console.log("Server is Started At PORT:3000");
});

