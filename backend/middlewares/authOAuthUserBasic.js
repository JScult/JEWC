const jwt = require("jsonwebtoken");
const OAuthUser = require("../models/oauthUser");

const authenticateOAuthUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Debugging

    const userId = decoded.user?.id;
    if (!userId) return res.status(401).json({ message: "Invalid token structure" });

    const user = await OAuthUser.findById(userId);
    console.log("Fetched user:", user); // Debugging

    if (!user) return res.status(404).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (err) {
    console.error("JWT Auth error:", err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authenticateOAuthUser;
