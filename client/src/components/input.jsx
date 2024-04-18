import React, { useState } from "react";

const Input = (handleInputChange) => {
  const [input, setInput] = useState("");
  return (
    <div className='flex flex-col justify-start w-fit'>
      <label
        htmlFor='input'
        className='mb-1 w-max px-4 text-white text-md font-medium'
      >
        Message Input
      </label>
      <input
        id='input'
        type='text'
        className='mx-2 w-56 rounded-lg h-8 text-left px-4 text-sm font-medium'
        style={{ background: "#b3a7a6" }}
      />
    </div>
  );
};

export default Input;
