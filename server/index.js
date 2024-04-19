import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { createMessage, getMessages } from "./database.js";
import "dotenv/config";

const WS_PORT = process.env.WS_PORT || 7778;
const HTTP_PORT = process.env.HTTP_PORT || 7777;

const app = express();
app.use(cors());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connection established with", socket.id);

  //ROUTE:
  //GET ALL MESSAGES
  socket.once("get-messages", async () => {
    console.log("-----User requesting all messages-----");
    const allMessages = await getMessages();
    socket.emit("receive-all", allMessages);

    console.log("-----Request Completed-----");
  });

  //ROUTE:
  //CREATE NEW MESSAGE
  socket.on("create-message", async (content, user) => {
    const newMessage = await createMessage(content, user);
    io.emit("receive-message", newMessage);

    console.log("-----Request Completed-----");
  });

  socket.on("disconnect", () => {
    console.log("disconnection");
  });
});

server.listen(process.env.WS_PORT);
app.listen(HTTP_PORT, () => {
  console.log("http started on", HTTP_PORT);
});
