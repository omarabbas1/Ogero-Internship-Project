const { updateUserProfile } = require("../services/userServices");

const updateUserProfileController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { displayName } = req.body;

    const updateData = { displayName };

    const updatedUser = await updateUserProfile(userId, updateData);

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      displayName: updatedUser.displayName,
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { updateUserProfileController };
