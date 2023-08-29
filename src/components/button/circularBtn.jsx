import React from "react";
import "./button.css";
const CircularBtn = ({ children, color, callBackAction, className }) => {
  return (
    <button
      className={`btn circular__btn btn__${color} ${className}`}
      onClick={callBackAction}
    >
      {children}
    </button>
  );
};

export default CircularBtn;
