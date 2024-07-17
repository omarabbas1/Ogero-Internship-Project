const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (user) => {
  try {
    const { username, email, password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      displayName: "",
    });

    const savedUser = await newUser.save();
    return { _id: savedUser._id, username, email };
  } catch (error) {
    console.error("Error in createUser:", error);
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    console.error("Error in getUserByEmail:", error);
    throw error;
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    return user;
  } catch (error) {
    console.error("Error in getUserByUsername:", error);
    throw error;
  }
};

const getUserProfile = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error in getUserProfile:", error);
    throw error;
  }
};

const updateUserProfile = async (userId, updateData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.error("Error in updateUserProfile:", error);
    throw error;
  }
};

const updateUserPassword = async (userId, newPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    console.error("Error in updateUserPassword:", error);
    throw error;
  }
};

const verifyUserPassword = async (userId, currentPassword) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    return isMatch;
  } catch (error) {
    console.error("Error in verifyUserPassword:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserByUsername,
  getUserProfile,
  updateUserProfile,
  updateUserPassword,
  verifyUserPassword,
};
