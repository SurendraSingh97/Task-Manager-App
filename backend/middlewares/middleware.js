const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { JWT_SECRET } = process.env;

exports.verifyAccessToken = async (req, res, next) => {
  const token = req.header("Authorization");
  
  if (!token) {
    return res.status(400).json({ success: false, message: "Access token not provided" });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decodedToken.id);
    
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    
    req.user = user;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid access token" });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Access token expired" });
    }
    console.error(err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
