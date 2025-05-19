import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8081 });

// let allSockets: WebSocket[] = []; // for broadCasting.
// try to use Maps, Records here...
// let allSockets = {
//     "room1": [socket1, socket2],
//     "room2": [socket3, socket1],
// };

interface User {
    socket: WebSocket,
    room: string,
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {

    socket.on("message", (message) => {

        const ParseData = JSON.parse(message as unknown as string);

        if (ParseData.type == "join") {
            allSockets.push({
                socket,
                room: ParseData.payload.roomId
            });
        }

        if (ParseData.type == "chat") {

            let currentRoom = allSockets.find((s) => s.socket == socket);
            let room = currentRoom?.room;

            allSockets.forEach((s) => {

                if (s.room == room) {
                    s.socket.send(ParseData.payload.message);
                }
            })

        }

    });

    socket.on("close", () => {
        console.log("Client disconnected");
        allSockets = allSockets.filter((s) => s.socket !== socket);
    });

    socket.on("error", (error) => {
        console.error("WebSocket error:", error);
    });
});

console.log("WebSocket server running on port 8081");
