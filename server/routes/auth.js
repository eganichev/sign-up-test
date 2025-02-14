const express = require('express');
const mock = require('../middleware/mock');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).send({ error: 'Error registering user' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).send({ error: 'Invalid username or password' });
        }

        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.send({ token });
    } catch (error) {
        res.status(400).send({ error: 'Error logging in' });
    }
});

module.exports = router;