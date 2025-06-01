import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
app.use(express.static(path.resolve("./public")))
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on('connection', (socket)=> {
    // console.log("A new User has connected", socket.id);
    socket.on('user-message', (message) => {
        console.log("A new User Message", message);
        io.emit('server-message', message);
    })
})

app.get('/', (req, res)=> {
    return res.sendFile('/public/index.html')
});

server.listen(9000, ()=> console.log("Server Started at PORT: 9000"));

