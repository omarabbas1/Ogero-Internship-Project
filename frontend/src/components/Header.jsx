import React, { useState } from "react";
import Button from "./Button";
import "../styles/Header.css";
import logo from "../assets/ogero-nbg.png";
import defaultUserIcon from "../assets/user.png";
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
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    setDropdownVisible(false);
    logout();
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo" onClick={navigateToHome} />
      </div>
      {user ? (
        <div className="logged-in-actions">
          <div className="user-profile-header" onClick={toggleDropdown}>
            <img
              src={user.profilePicture || defaultUserIcon}
              alt="profile"
              className="user-icon"
            />
            <div className="username">{user.username}</div>
            <div className={`dropdown-menu ${dropdownVisible ? "show" : ""}`}>
              <div className="dropdown-item" onClick={navigateToUserProfile}>
                Profile
              </div>
              <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div>
            </div>
          </div>
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
