import "./App.css";
import { useState } from "react";
// import "dotenv/config";
import axios from "axios";
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

function App() {
  const [input, setInput] = useState("");

  const submit = () => {
    console.log("submitting", input);
    socket.emit("create-message", input);
  };

  return (
    <div className='App'>
      <div>establish</div>
      <div className='flex flex-col'>
        <input
          type='text'
          value={input}
          onInput={(e) => setInput(e.target.value)}
          className='border border-2 border-black w-48'
        />
        <button
          className='bg-cyan-400 rounded border border-2 border-black w-16'
          id='btn'
          onClick={submit}
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default App;
