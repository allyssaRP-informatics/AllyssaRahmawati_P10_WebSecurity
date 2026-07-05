const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100,
    message: {
        message: 'Terlalu banyak request, silakan coba lagi nanti.'
    }
});

module.exports = limiter;