import express from "express";
import fs from "fs";
import zlib from "zlib";
import status from "express-status-monitor";

const app = express();
const PORT = 3000;
app.use(status());

// Stream Read (Sample.txt) --> Zipper --> fs write Stream
fs.createReadStream("./sample.txt").pipe(zlib.createGzip().pipe(fs.createWriteStream("./sample.zip")));

app.get("/", (req, res)=> {
    const stream = fs.createReadStream("./sample.txt", "utf-8");
    stream.on('data', (chunk)=> res.write(chunk));
    stream.on('end', ()=> res.end());
});

app.listen(PORT, ()=> {
    console.log(`Server Started at http://localhost:${PORT}`)
});

