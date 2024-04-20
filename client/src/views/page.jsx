import React, { useState, useEffect } from "react";
import InputFields from "./inputFields";
import MessageContainer from "./messageContainer";
import { io } from "socket.io-client";

const socket = io();
socket.io.on("error", (error) => {
  console.log(error);
});

const sendMessage = (val) => {
  console.log("sending!", val);

  socket.emit("create-message", val, socket.id);
};

const Page = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);

  socket.on("receive-message", (newMessage) => {
    console.log("got", newMessage);
    setMessages([newMessage, ...messages]);
  });

  socket.once("receive-all", (allMessages) => {
    console.log("Received All Messages - ", allMessages.toReversed());
    setMessages(allMessages.toReversed());
  });

  useEffect(() => {
    socket.emit("get-messages");
  }, []);

  return (
    <>
      <div className='flex flex-row w-7/12 h-screen p-10 justify-between mb-4'>
        <InputFields sendToBackend={sendMessage} />
        <MessageContainer messages={messages} />
      </div>
    </>
  );
};

export default Page;
