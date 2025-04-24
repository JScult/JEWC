const express = require('express');
const router = express.Router();
const oauthController = require('../controllers/oauthController');
const successController = require('../controllers/successController');
const uploadImage = require("../middlewares/imageConfig");
const { updateProfile } = require("../controllers/oauthUserController");
const authenticateOAuthUser = require("../middlewares/authOAuthUserBasic");

router.put("/profile", authenticateOAuthUser, uploadImage.single("profilePicture"), updateProfile);
router.get('/google', oauthController.oauthGoogle);
router.get('/google/callback', oauthController.oauthGoogleCallback);
router.get('/success', successController.authSuccess);
router.get('/pending', successController.authPending);

module.exports=router