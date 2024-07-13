const {
  getUserByEmail,
  createUser,
  getUserByUsername,
  getUserProfile,
} = require("../services/userServices");
const { generateToken } = require("../utils/jwtUtils");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { email, username } = req.body;

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "Email is already used" });
    }

    const existingUserByUsername = await getUserByUsername(username);
    if (existingUserByUsername) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    const user = await createUser(req.body);
    if (!user) {
      return res.status(500).json({ message: "User creation failed" });
    }

    const token = generateToken({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Sign Up Failed:", error);
    res.status(500).json({ message: "Sign Up Failed" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);
    if (!user) {
      console.error("User not found");
      return res.status(401).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken({
      id: user._id,
      username: user.username,
      email: user.email,
    });

    const userProfile = await getUserProfile(user._id);

    res.status(200).json({
      id: userProfile._id,
      username: userProfile.username,
      email: userProfile.email,
      displayName: userProfile.displayName,
      token,
    });
  } catch (error) {
    console.error("Sign In Failed:", error);
    res.status(500).json({ message: "Sign In Failed" });
  }
};

module.exports = { signUp, signIn };
