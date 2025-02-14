const express = require('express');
const router = express.Router();

// Define your booking routes here
router.get('/', (req, res) => {
    res.send('List of bookings');
});

router.post('/', (req, res) => {
    res.send('Create a new booking');
});

module.exports = router;