const express = require("express");
const router = express.Router();
const { verifyOAuthUser, getConfiderationUsers } = require("../controllers/confiderationController");
const  confiderationAuth  = require("../middlewares/confiderationAuthMiddleware");

router.patch("/verify-user/:oauthUserId", confiderationAuth, verifyOAuthUser);
router.get("/confideration-users", confiderationAuth, getConfiderationUsers);
module.exports = router;
