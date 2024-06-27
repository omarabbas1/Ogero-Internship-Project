import React, { useState, useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import {
  handleProfileUpdate,
  handleProfilePictureChange,
  fetchUserProfile,
} from "../utils/profileUtils";
import "../styles/UserProfile.css";
import { handleFormChange } from "../utils/formUtils";
import Button from "../components/Button";
import Navigation from "../utils/navigation";

const UserProfile = () => {
  const { user, setUser } = useUser();
  const { navigateToUserProfile } = Navigation();
  const [profileData, setProfileData] = useState({
    displayName: "",
    profilePicture: null,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetchUserProfile(user.token, setProfileData);
  }, [user.token, setProfileData]);

  return (
    <div className="user-profile-wrapper">
      <div className="user-profile-container">
        <h2>Your Profile</h2>
        <form
          onSubmit={(e) =>
            handleProfileUpdate(
              e,
              profileData,
              setUser,
              user.token,
              setErrorMessage,
              setSuccessMessage
            )
          }
          className="user-profile-form"
        >
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
          <div className="form-group">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleProfilePictureChange(setProfileData)}
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
        <Button
          text="Change Password"
          className="change-password"
          onClick={navigateToUserProfile}
        />
      </div>
    </div>
  );
};

export default UserProfile;
