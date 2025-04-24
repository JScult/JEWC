const path = require("path");
const OAuthUser = require("../models/oauthUser");
const Confideration = require("../models/Confideration"); // Make sure this is imported

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.user.id; 
        console.log("User ID:", userId); // Log the user ID for debugging
        const { Confideration_name, CIN_Passport, ConfiderationCode } = req.body;

        
        const confiderationExists = await Confideration.findOne({ name: Confideration_name });
        if (!confiderationExists) {
            return res.status(400).json({ message: "Invalid Confideration name" });
        }

        const updateData = { 
            Confideration_name,
            ConfiderationCode,
            CIN_Passport,
            isProfileComplete: true
        };

        if (req.file) {
            updateData.profilePicture = path.join("/uploads/images", req.file.filename);
        }

        const updatedUser = await OAuthUser.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({
            message: "Profile updated successfully",
            user: updatedUser
        });

    } catch (err) {
        console.error("Update profile error:", err);
        res.status(500).json({ message: "Server error" });
    }
};
