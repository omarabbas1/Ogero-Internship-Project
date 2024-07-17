import { changePasswordApi } from "../api/changePassword";
import { isStrongPassword } from "./authUtils";

const validatePasswords = (
  newPassword,
  confirmPassword,
  currentPassword,
  setStrengthMessage,
  setMatchMessage
) => {
  if (!isStrongPassword(newPassword)) {
    setStrengthMessage("Password is not strong enough");
    return { valid: false };
  } else {
    setStrengthMessage("");
  }

  if (newPassword === currentPassword) {
    setStrengthMessage(
      "New password must be different from the current password"
    );
    return { valid: false };
  } else {
    setStrengthMessage("");
  }

  if (newPassword !== confirmPassword) {
    setMatchMessage("Passwords do not match");
    return { valid: false };
  } else {
    setMatchMessage("");
  }

  return { valid: true };
};

export const handleInputChange = (
  e,
  passwordData,
  setPasswordData,
  setStrengthMessage,
  setMatchMessage
) => {
  const { name, value } = e.target;
  setPasswordData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

  if (name === "newPassword" || name === "confirmPassword") {
    validatePasswords(
      name === "newPassword" ? value : passwordData.newPassword,
      name === "confirmPassword" ? value : passwordData.confirmPassword,
      passwordData.currentPassword,
      setStrengthMessage,
      setMatchMessage
    );
  }
};

export const handleChangePassword = async (
  e,
  passwordData,
  setError,
  setSuccess,
  setStrengthMessage,
  setMatchMessage,
  userId,
  token
) => {
  e.preventDefault();
  setError("");
  setSuccess("");

  const { valid } = validatePasswords(
    passwordData.newPassword,
    passwordData.confirmPassword,
    passwordData.currentPassword,
    setStrengthMessage,
    setMatchMessage
  );

  if (!valid) {
    return;
  }

  const response = await changePasswordApi(
    userId,
    passwordData.currentPassword,
    passwordData.newPassword,
    token
  );

  if (response.success) {
    setSuccess("Password changed successfully!");
  } else {
    setError(response.message);
  }
};
