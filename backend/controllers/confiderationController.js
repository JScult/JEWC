const OAuthUser = require("../models/oauthUser");
const Confideration = require("../models/Confideration");

const verifyOAuthUser = async (req, res) => {
    try {
        const confiderationId = req.user.id; // Assuming Confideration is logged in
        const { oauthUserId } = req.params;

        const confideration = await Confideration.findById(confiderationId);
        if (!confideration) return res.status(404).json({ message: "Confideration not found" });

        const oauthUser = await OAuthUser.findById(oauthUserId);
        if (!oauthUser) return res.status(404).json({ message: "OAuth user not found" });

        if (oauthUser.Confideration_name !== confideration.name) {
            return res.status(403).json({ message: "You are not authorized to verify this user" });
        }

        oauthUser.confiderationVerification = true;
        await oauthUser.save();

        res.status(200).json({ message: "OAuth user verified successfully", user: oauthUser });
    } catch (err) {
        console.error("Error verifying OAuth user:", err);
        res.status(500).json({ message: "Server error" });
    }
};

const getConfiderationUsers = async (req, res) => {
    try {
        const confiderationId = req.user.id; // Assuming Confideration is logged in

        const confideration = await Confideration.findById(confiderationId);
        if (!confideration) return res.status(404).json({ message: "Confideration not found" });

        const users = await OAuthUser.find({ Confideration_name: confideration.name });
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching confideration users:", err);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    verifyOAuthUser,
    getConfiderationUsers
};