import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io";
import { createServer } from "http";
import { createMessage, getMessages } from "./db/database.js";
import { PORT, environment } from "./env.js";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: `http://localhost:3000`,
    methods: ["GET", "POST"],
  },
});

if (environment == "production") {
  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

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

server.listen(PORT);
