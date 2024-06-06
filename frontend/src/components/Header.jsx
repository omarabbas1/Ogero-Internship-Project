import React from "react";
import Button from "./Button";
import "../styles/Header.css";
import logo from "../assets/ogero-nbg.png";
import { useNavigation } from "../utils/navigation";

const Header = () => {
  const { navigateToHome, navigateToSignIn, navigateToSignUp } =
    useNavigation();

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" onClick={navigateToHome} />
      </div>
      <div className="header-text">
        <h1>Ogero Streaming</h1>
      </div>
      <div className="header-buttons">
        <Button
          text="Sign In"
          className={"signin"}
          onClick={navigateToSignIn}
        />
        <Button
          text="Sign Up"
          className={"signup"}
          onClick={navigateToSignUp}
        />
      </div>
    </header>
  );
};

export default Header;
