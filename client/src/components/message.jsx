import React from "react";

const Message = ({ content, sent_at, user }) => {
  const date = new Date(sent_at);
  return (
    <>
      <div className='flex flex-col bg-sky-600 rounded-xl justify-between w-96 min-h-20 py-3 mb-4 drop-shadow-lg'>
        <p className='border-b border-b-2 border-b-slate-400/50 mx-2'>
          {content}
        </p>
        <div className='flex flex-row text-xs w-full justify-between px-4'>
          <p>
            at: {date.getMonth() + 1}/{date.getDate()}/{date.getFullYear()}{" "}
            {date.getHours()}:{date.getMinutes()}
          </p>

          <p>user: {user}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
