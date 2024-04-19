import React, { useRef } from "react";
import Input from "../components/input";
import Submit from "../components/submit";

const InputFields = ({ sendToBackend }) => {
  const input = useRef("");

  const changeInput = (val) => {
    input.current = val;
  };
  return (
    <>
      <div className='flex flex-col'>
        <Input handleInputChange={changeInput} />
        <Submit handleSubmit={() => sendToBackend(input.current)} />
      </div>
    </>
  );
};

export default InputFields;
