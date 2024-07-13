import axiosInstance from "./axiosInstance";

export const updateUserProfile = (userId, token, profileData) => {
  return axiosInstance.put(`/user/profile/${userId}`, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
