import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";

const { WS_PORT, HTTP_PORT } = process.env;
console.log(WS_PORT, HTTP_PORT);

const app = express();
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
    credentials: false,
  },
});

io.on("connection", (socket) => {
  console.log("connection established");

  socket.on("message", (data) => {
    console.log(`message: ${data}`);
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
