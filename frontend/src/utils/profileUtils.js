import { getUserProfile, updateUserProfile } from "../api/userProfile";

export const fetchUserProfile = async (token, setProfileData) => {
  try {
    const userProfile = await getUserProfile(token);
    setProfileData({
      displayName: userProfile.displayName || "",
      profilePicture: userProfile.profilePicture || null,
    });
  } catch (error) {
    console.error("Failed to fetch user profile:", error);
  }
};

export const handleProfileUpdate = async (
  e,
  profileData,
  setUser,
  token,
  setErrorMessage,
  setSuccessMessage
) => {
  e.preventDefault();
  try {
    const updatedProfile = await updateUserProfile(token, profileData);
    setUser((prevUser) => ({
      ...prevUser,
      displayName: updatedProfile.displayName,
      profilePicture: updatedProfile.profilePicture,
    }));
    setSuccessMessage("Profile updated successfully");
  } catch (error) {
    console.error("Profile update failed:", error);
    setErrorMessage("Profile update failed");
  }
};

export const handleProfilePictureChange = (setProfileData) => (e) => {
  const file = e.target.files[0];
  setProfileData((prevData) => ({
    ...prevData,
    profilePicture: file,
  }));
};
