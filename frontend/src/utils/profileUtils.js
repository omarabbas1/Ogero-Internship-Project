import { updateUserProfileApi } from "../api/userProfile";

export const handleProfileUpdate = async (
  e,
  profileData,
  updateUser,
  userId,
  token,
  setErrorMessage,
  setSuccessMessage,
  currentDisplayName
) => {
  e.preventDefault();
  try {
    if (profileData.displayName === "") {
      setErrorMessage("Please fill in the fields before trying to update!");
      setSuccessMessage("");
      return;
    }

    if (profileData.displayName === currentDisplayName) {
      setErrorMessage("The display name is the same as the current one.");
      setSuccessMessage("");
      return;
    }

    const updatedProfile = await updateUserProfileApi(
      userId,
      token,
      profileData
    );
    updateUser({
      displayName: updatedProfile.data.displayName,
    });
    setSuccessMessage("Profile updated successfully");
    setErrorMessage("");
  } catch (error) {
    console.error("Profile update failed:", error);
    setErrorMessage("Profile update failed");
    setSuccessMessage("");
  }
};
