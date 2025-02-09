import React from "react";

const Button = ({ disabled, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-32 py-2 text-sm text-white cursor-pointer
        ${disabled ? "bg-blue-200" : "bg-green-400"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
