import express from "express";
import urlRouter from "./routes/url.js"
import connectToMongoDB from "./connect.js";
import dotenv from "dotenv";
import path from "path";
import staticRouter from "./routes/staticRouter.js"
import userRouter from "./routes/user.js";
import cookieParser from "cookie-parser";
import { restrictToLoggedInUserOnly, checkAuth } from "./middlewares/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

connectToMongoDB(process.env.db_connection).then(()=> {
    console.log("MongoDB connected");
});

app.set('view engine', "ejs");
app.set('views', path.resolve("./views"));

app.use("/url",restrictToLoggedInUserOnly,urlRouter);
app.use("/user", userRouter);
app.use("/", checkAuth ,staticRouter);


app.listen(3000, ()=> {
    console.log("Server is Started At PORT:3000");
});

