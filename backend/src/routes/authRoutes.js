const express = require("express");
const {
  signUp,
  signIn,
  getUsername,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/username", getUsername);

module.exports = router;
