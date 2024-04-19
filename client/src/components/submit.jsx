import React from "react";

const Submit = ({ handleSubmit }) => {
  return (
    <>
      <button
        onClick={handleSubmit}
        className='bg-light-turqoise hover:bg-dark-turqoise active:bg-darker-turqoise h-10 w-20 m-2 rounded-xl font-medium text-center align-middle drop-shadow-xl'
      >
        Submit
      </button>
    </>
  );
};

export default Submit;
