const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const OAuthUser = require("../models/oauthUser");

const authenticateUser = async (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access Denied. No token provided or invalid format." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.user?.id || decoded.id; 

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID format" });
        }

        const objectId = new mongoose.Types.ObjectId(userId);

        const user = await OAuthUser.findById(objectId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

       
        let name = user.name;

        req.user = {
            id: user._id,
            name,
            role: user.role || 'participant'
        };

        next();
    } catch (err) {
        console.error("Authentication error:", err);
        return res.status(400).json({ message: "Invalid or expired token" });
    }
};

module.exports = authenticateUser;
