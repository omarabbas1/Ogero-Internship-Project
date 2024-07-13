const express = require("express");
const {
  updateUserProfileController,
} = require("../controllers/userProfileController");

const router = express.Router();

router.put("/profile/:userId", updateUserProfileController);

module.exports = router;
