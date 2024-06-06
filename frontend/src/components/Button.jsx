import React from "react";
import "../styles/Button.css";

const Button = ({ text, className, onClick, type }) => {
  const buttonClass = `${className || ""}-button`;

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
