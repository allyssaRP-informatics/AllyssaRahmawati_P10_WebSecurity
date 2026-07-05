const { body } = require('express-validator');

const registerValidation = [
    body('username')
        .notEmpty()
        .withMessage('Username wajib diisi'),

    body('password')
        .isLength({ min: 6 })
        .withMessage('Password minimal 6 karakter')
];

module.exports = {
    registerValidation
};