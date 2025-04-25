const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const registerAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({ email, password: hashedPassword });
        await admin.save();

        res.status(201).json({ message: "Admin registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering admin" });
        console.error("Registration error:", error);
    }
};


const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await Admin.findOne({ email });

        if (!admin) return res.status(404).json({ message: "Admin not found" });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const jwtToken = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
            expiresIn: "9h",
        });

        res.json({
            message: "Login successful",
            token: jwtToken,
        });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Login error" });
    }
};


const changeAdminPassword = async (req, res) => {
    try {
        const adminId = req.admin.id;
        const { currentPassword, newPassword } = req.body;

        const admin = await Admin.findById(adminId);
        if (!admin) return res.status(404).json({ message: "Admin not found" });

        const isMatch = await bcrypt.compare(currentPassword, admin.password);
        if (!isMatch) return res.status(400).json({ message: "Current password is incorrect" });

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedNewPassword;
        await admin.save();

        res.json({ message: "Password changed successfully" });
    } catch (error) {
        console.error("Error in changeAdminPassword:", error);
        res.status(500).json({ message: "Error changing password" });
    }
};

module.exports = { registerAdmin, loginAdmin, changeAdminPassword };
