import axiosInstance from "./axiosInstance";

export const getUserProfile = (token) => {
  return axiosInstance.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserProfile = (token, profileData) => {
  const formData = new FormData();
  formData.append("displayName", profileData.displayName);
  if (profileData.profilePicture) {
    formData.append("profilePicture", profileData.profilePicture);
  }

  return axiosInstance.put("/user/profile", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
