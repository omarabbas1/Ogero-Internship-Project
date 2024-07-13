import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import { handleProfileUpdate } from "../utils/profileUtils";
import "../styles/UserProfile.css";
import { handleFormChange } from "../utils/formUtils";
import Button from "../components/Button";

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const [profileData, setProfileData] = useState({
    displayName: user.displayName || "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleProfileUpdate(
        event,
        profileData,
        updateUser,
        user.id,
        user.token,
        setErrorMessage,
        setSuccessMessage,
        user.displayName
      );
    } catch (error) {
      setErrorMessage("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-container">
        <h2>Your Profile</h2>
        <form onSubmit={handleFormSubmit} className="user-profile-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="displayName">Display Name:</label>
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={profileData.displayName}
              onChange={handleFormChange(setProfileData)}
            />
          </div>
          <Button
            text="Update Profile"
            className="update-profile"
            type="submit"
          />
        </form>
        {errorMessage && (
          <div className="profile-error-message">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="profile-success-message">{successMessage}</div>
        )}
        <Button text="Change Password" className="change-password" />
      </div>
    </div>
  );
};

export default UserProfile;
