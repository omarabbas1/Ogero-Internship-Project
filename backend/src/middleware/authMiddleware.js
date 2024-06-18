const { verifyToken } = require("../utils/jwtUtils");

const protectRoute = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    next();
  });
};

module.exports = { protectRoute };
