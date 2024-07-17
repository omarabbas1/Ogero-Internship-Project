import React, { useState } from "react";
import { useUser } from "../contexts/UserContext";
import {
  handleInputChange,
  handleChangePassword,
} from "../utils/changePasswordUtils";
import Button from "../components/Button";
import "../styles/ChangePassword.css";

const ChangePassword = () => {
  const { user } = useUser();
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [strengthMessage, setStrengthMessage] = useState("");
  const [matchMessage, setMatchMessage] = useState("");

  const canSubmit = !strengthMessage && !matchMessage;

  return (
    <div className="change-password-wrapper">
      <div className="change-password-container">
        <h2>Change Password</h2>
        <form
          onSubmit={(e) =>
            handleChangePassword(
              e,
              passwordData,
              setError,
              setSuccess,
              setStrengthMessage,
              setMatchMessage,
              user.id,
              user.token
            )
          }
          className="change-password-form"
        >
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              value={passwordData.currentPassword}
              onChange={(e) =>
                handleInputChange(
                  e,
                  passwordData,
                  setPasswordData,
                  setStrengthMessage,
                  setMatchMessage
                )
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              value={passwordData.newPassword}
              onChange={(e) =>
                handleInputChange(
                  e,
                  passwordData,
                  setPasswordData,
                  setStrengthMessage,
                  setMatchMessage
                )
              }
              required
            />
            <small className="password-message">{strengthMessage}</small>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                handleInputChange(
                  e,
                  passwordData,
                  setPasswordData,
                  setStrengthMessage,
                  setMatchMessage
                )
              }
              required
            />
            <small className="password-message">{matchMessage}</small>
          </div>
          {error && <p className="change-password-error-message">{error}</p>}
          {success && (
            <p className="change-password-success-message">{success}</p>
          )}
          <Button
            text="Change Password"
            className="change-password"
            type="submit"
            disabled={!canSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
