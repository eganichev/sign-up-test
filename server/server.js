const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const bookingRouter = require('./routes/bookings');
// const { authMiddleware } = require('./middleware/auth');
const app = express();

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/hotelbooking', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use the routers
app.use('/api/auth', authRouter);
// app.use('/api/bookings', authMiddleware, bookingRouter);
app.use('/api/bookings', bookingRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
