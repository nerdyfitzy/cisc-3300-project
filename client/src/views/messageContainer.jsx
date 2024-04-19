import React from "react";
import Message from "../components/message";

const MessageContainer = ({ messages }) => {
  return (
    <>
      <div className='!overflow-y-auto !overflow-x-visible h-auto pr-2'>
        {messages.map((m) => (
          <Message
            key={m.id}
            content={m.content}
            user={m.user}
            sent_at={m.sent_at}
          />
        ))}
      </div>
    </>
  );
};

export default MessageContainer;
