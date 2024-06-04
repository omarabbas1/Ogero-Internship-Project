import React from "react";
import "../styles/Button.css";

const Button = ({ text, className, onClick }) => {
  const buttonClass = `${className || ""}-button`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
