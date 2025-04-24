const Confideration = require('../models/Confideration');
const OAuthUser = require('../models/oauthUser');


const getConfiderations = async (req, res) => {
  try {
    const confs = await Confideration.find();
    res.json(confs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching confiderations' });
  }
};


const getOAuthUsers = async (req, res) => {
  try {
    const users = await OAuthUser.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching OAuth users' });
  }
};


const deleteConfideration = async (req, res) => {
  try {
    await Confideration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Confideration deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting confideration' });
  }
};


const deleteOAuthUser = async (req, res) => {
  try {
    await OAuthUser.findByIdAndDelete(req.params.id);
    res.json({ message: 'OAuth user deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting OAuth user' });
  }
};


const updateConfideration = async (req, res) => {
  try {
    const updated = await Confideration.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating confideration' });
  }
};


const updateOAuthUser = async (req, res) => {
  try {
    const updated = await OAuthUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Error updating OAuth user' });
  }
};


const getConfiderationById = async (req, res) => {
    try {
      const conf = await Confideration.findById(req.params.id);
      if (!conf) return res.status(404).json({ message: "Confideration not found" });
      res.json(conf);
    } catch (err) {
      res.status(500).json({ message: "Error fetching confideration" });
    }
  };
  
  
  const getOAuthUserById = async (req, res) => {
    try {
      const user = await OAuthUser.findById(req.params.id);
      if (!user) return res.status(404).json({ message: "OAuth user not found" });
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: "Error fetching OAuth user" });
    }
  };
  

module.exports = {
  getConfiderations,
  getOAuthUsers,
  deleteConfideration,
  deleteOAuthUser,
  updateConfideration,
  updateOAuthUser,
  getConfiderationById,
  getOAuthUserById
};
