const jwt = require("jsonwebtoken");
const Confideration = require("../models/Confideration");

const confiderationAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const confideration = await Confideration.findById(decoded.id);
        if (!confideration) {
            return res.status(401).json({ message: "Confideration not found" });
        }

        req.user = {
            id: confideration._id,
            name: confideration.name,
            email: confideration.email,
            role: "confideration"
        };

        next();
    } catch (err) {
        console.error("Confideration auth error:", err);
        res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = confiderationAuth;
