import logo from "./logo.svg";
import "./App.css";
// import "dotenv/config";
import axios from "axios";
import { io } from "socket.io-client";

const establish = () => {
  const socket = io("ws://localhost:7778", {
    reconnectionDelayMax: 10000,
    auth: {
      token: "123",
    },
    withCredentials: false,
  });

  socket.io.on("error", (error) => {
    console.log(error);
  });
};

function App() {
  return (
    <div className='App'>
      <div>establish {establish()}</div>
    </div>
  );
}

export default App;
