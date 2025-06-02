import express from "express";
import urlRouter from "./routes/url.js"
import connectToMongoDB from "./connect.js";
import dotenv from "dotenv";
import path from "path";
import staticRouter from "./routes/staticRouter.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/url", urlRouter);
app.use("/", staticRouter);

connectToMongoDB(process.env.db_connection).then(()=> {
    console.log("MongoDB connected");
});

app.set('view engine', "ejs");
app.set('views', path.resolve("./views"));


app.listen(3000, ()=> {
    console.log("Server is Started At PORT:3000");
});

