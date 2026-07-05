const express = require('express');
const router = express.Router();

const {
    register,
    login
} = require('../controllers/authController');

const {
    registerValidation
} = require('../validators/authValidator');

// ====== Register ====== 
router.post('/register', registerValidation, register);

// ====== Login ====== 
router.post('/login', login);

module.exports = router;