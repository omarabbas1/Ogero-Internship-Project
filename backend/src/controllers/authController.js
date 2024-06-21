const bcrypt = require("bcrypt");
const SqlDataAccess = require("../data/sqlDataAccess");
const NoSqlDataAccess = require("../data/nosqlDataAccess");
const { generateToken } = require("../utils/jwtUtils");

let dataAccess;
if (process.env.DB_TYPE === "sql") {
  dataAccess = new SqlDataAccess();
} else if (process.env.DB_TYPE === "nosql") {
  dataAccess = new NoSqlDataAccess();
} else {
  throw new Error("Unsupported DB_TYPE");
}

const signUp = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await dataAccess.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await dataAccess.createUser(req.body);
    if (!user) {
      return res.status(500).json({ message: "User creation failed" });
    }

    const token = generateToken(user);
    res.status(201).json({ username: user.username, email: user.email, token });
  } catch (error) {
    console.error("Sign Up Failed:", error);
    res.status(500).json({ message: "Sign Up Failed" });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await dataAccess.getUserByEmail(email);
    if (!user) {
      console.error("User not found");
      return res.status(401).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.error("Invalid password");
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = generateToken(user);
    res.status(200).json({ email: user.email, username: user.username, token });
  } catch (error) {
    console.error("Sign In Failed:", error);
    res.status(500).json({ message: "Sign In Failed" });
  }
};

module.exports = { signUp, signIn };
