import express from "express";

const app = express();

app.get("/signup", (req, res)=> {
    res.send("hello world");
});

app.get("/signin", (req, res)=> {
    res.send("hello world");
});

app.get("/chat", (req, res)=> {
    res.send("hello world");
});

app.listen(3001, () => {
    console.log('HTTP server running on port 3001');
});

