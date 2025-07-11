const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

//  Protected route should be defined BEFORE export
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: `Authenticated access granted to user ${req.user.userId}` });
});


// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(' Registration error:', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});


module.exports = router;