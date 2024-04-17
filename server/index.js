import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import { createMessage, getMessage, getMessages } from "./database.js";
import "dotenv/config";

const { WS_PORT, HTTP_PORT } = process.env;
console.log(WS_PORT, HTTP_PORT);

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

  socket.on("create-message", (content) => {
    const newMessage = createMessage(content);
    io.emit("receive-message", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("disconnection");
  });
});

server.listen(process.env.WS_PORT);
app.listen(HTTP_PORT, () => {
  console.log("http started on", HTTP_PORT);
});

app.get("/", (req, res) => {});
app.get("/test", (req, res) => {
  res.send("gotten");
});
