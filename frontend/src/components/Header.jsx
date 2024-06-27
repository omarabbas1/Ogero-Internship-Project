import React from "react";
import Button from "./Button";
import "../styles/Header.css";
import logo from "../assets/ogero-nbg.png";
import Navigation from "../utils/navigation";
import { useUser } from "../contexts/UserContext";

const Header = () => {
  const {
    navigateToHome,
    navigateToSignIn,
    navigateToSignUp,
    navigateToUserProfile,
  } = Navigation();
  const { user, logout } = useUser();

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" onClick={navigateToHome} />
      </div>
      {user ? (
        <div className="logged-in-actions">
          <div className="username" onClick={navigateToUserProfile}>
            {user.username}
          </div>
          <Button text="Logout" className="logout" onClick={logout} />
        </div>
      ) : (
        <div className="logged-out-actions">
          <Button
            text="Sign In"
            className="signin"
            onClick={navigateToSignIn}
          />
          <Button
            text="Sign Up"
            className="signup"
            onClick={navigateToSignUp}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
