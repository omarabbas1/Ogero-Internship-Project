const {
  verifyUserPassword,
  updateUserPassword,
} = require("../services/userServices");

const changePasswordController = async (req, res) => {
  const { userId } = req.params;
  const { currentPassword, newPassword } = req.body;

  try {
    const isPasswordValid = await verifyUserPassword(userId, currentPassword);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    await updateUserPassword(userId, newPassword);

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error in changePassword:", error);
    res.status(500).json({ message: "Error changing password" });
  }
};

module.exports = { changePasswordController };
