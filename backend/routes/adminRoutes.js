const express = require('express');
const router = express.Router();
const {
  getConfiderations,
  getOAuthUsers,
  deleteConfideration,
  deleteOAuthUser,
  updateConfideration,
  updateOAuthUser,
  getConfiderationById,
  getOAuthUserById
} = require('../controllers/adminController');
const authenticateAdmin = require('../middlewares/adminAuth');



router.get('/confiderations', authenticateAdmin, getConfiderations);
router.get('/confiderations/:id', authenticateAdmin, getConfiderationById);
router.put('/confiderations/:id', authenticateAdmin, updateConfideration);
router.delete('/confiderations/:id', authenticateAdmin, deleteConfideration);


router.get('/oauth-users', authenticateAdmin, getOAuthUsers);
router.get('/oauth-users/:id', authenticateAdmin, getOAuthUserById);
router.put('/oauth-users/:id',authenticateAdmin, updateOAuthUser);
router.delete('/oauth-users/:id',authenticateAdmin, deleteOAuthUser);


module.exports = router;
