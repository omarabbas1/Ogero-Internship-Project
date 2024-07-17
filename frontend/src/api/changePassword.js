import axiosInstance from "./axiosInstance";

export const changePasswordApi = async (
  userId,
  currentPassword,
  newPassword,
  token
) => {
  try {
    const response = await axiosInstance.put(
      `/user/change-password/${userId}`,
      { currentPassword, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Error changing password",
    };
  }
};
