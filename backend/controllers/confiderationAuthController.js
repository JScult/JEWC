const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Confideration = require('../models/Confideration');

const loginConfideration = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await Confideration.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, name: user.name, role: 'confideration' },
      process.env.JWT_SECRET,
      { expiresIn: '9h' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    console.error('Confideration login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginConfideration };
