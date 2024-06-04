import React from "react";
import Button from "./Button.jsx";
import "../styles/Header.css";
import logo from "../assets/ogero.jpeg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header-text">
        <h1>Ogero Streaming</h1>
      </div>
      <div className="header-buttons">
        <Button text="Sign In" className={"signin"} />
        <Button text="Sign Up" className={"signup"} />
      </div>
    </div>
  );
};

export default Header;
