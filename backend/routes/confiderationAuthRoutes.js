const express = require('express');
const router = express.Router();
const { loginConfideration } = require('../controllers/confiderationAuthController');

router.post('/login', loginConfideration);

module.exports = router;
