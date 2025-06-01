import http from "http";
import fs from "fs";

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile('log.txt', log, (err, data)=> {
        // console.log(req.headers);
        switch(req.url){
            case "/": res.end("HomePage");
            break
            case "/about": res.end("I am Vaibhav Mahajan");
            break
            default: res.end("404 Not Found");
        }
    })
});

myServer.listen(8000, ()=> {
    console.log("Server Started!");
});
