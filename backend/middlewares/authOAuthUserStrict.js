const jwt = require("jsonwebtoken");
const OAuthUser = require("../models/oauthUser");

const authenticateOAuthUserStrict = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.user?.id;
    if (!userId) return res.status(401).json({ message: "Invalid token structure" });

    const user = await OAuthUser.findById(userId);

    if (!user || !user.confiderationVerification) {
      return res.status(403).json({ message: "Access denied: Not verified by confideration" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authenticateOAuthUserStrict;
