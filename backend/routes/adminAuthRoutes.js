const express = require("express");
const { registerAdmin, loginAdmin, changeAdminPassword, verifyLogin } = require("../controllers/adminAuthController");
const authenticateAdmin = require("../middlewares/adminAuth");
const router = express.Router();

router.post("/signup", registerAdmin); 
router.post("/login", loginAdmin);
router.put("/change-password", authenticateAdmin, changeAdminPassword)

module.exports = router;
