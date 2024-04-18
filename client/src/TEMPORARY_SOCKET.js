import { io } from "socket.io-client";

const socket = io("http://localhost:7778", {
  reconnectionDelayMax: 10000,
});

socket.io.on("error", (error) => {
  console.log(error);
});

socket.on("receive-message", (newMessage) => {
  console.log("new message", newMessage);
});
