const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const limiter = require('./middleware/rateLimiter');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// ========= Middleware =========
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(limiter);

// ========= Test Route =========
app.get('/', (req, res) => {
    res.json({
        message: 'UNSIA Digital Library API is Running 🚀'
    });
});

// ========= Routes =========
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// ========= Middleware Error =========
app.use(notFound);
app.use(errorHandler);

module.exports = app;