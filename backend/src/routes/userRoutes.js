const express = require("express");
const {
  updateUserProfileController,
} = require("../controllers/userProfileController");
const {
  changePasswordController,
} = require("../controllers/changePasswordController");
const { protectRoute } = require("../middleware/authMiddleware");

const router = express.Router();

router.put("/profile/:userId", protectRoute, updateUserProfileController);

router.put("/change-password/:userId", protectRoute, changePasswordController);

module.exports = router;
