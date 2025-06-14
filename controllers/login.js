const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { user: UserModel } = require('../models');

// Create JSON Web Token
function createToken(_id) {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

// Login handler
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'All fields must be filled.' });
    }

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Incorrect email or password.' });
    }

    // Compare password with hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Incorrect email or password.' });
    }

    // Respond with user info
    // const userResponse = {
    //   _id: user._id,
    //   email: user.email
    // };
    // res.status(200).json(userResponse);
    const token = createToken(user._id);
    res.status(200).json({
      _id: user._id,
      email: user.email,
      token
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: error.message || 'Internal server error during login.' });
  }
}

module.exports = {
  loginUser
};
