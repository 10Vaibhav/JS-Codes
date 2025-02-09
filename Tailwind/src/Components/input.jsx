import React from "react";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 rounded-xl text-lg text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  );
};

export default Input;