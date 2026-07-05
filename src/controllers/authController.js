const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const users = require('../data/users');
const generateToken = require('../utils/generateToken');

// ========= Register =========
exports.register = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        });
    }

    const { username, password } = req.body;
    const existingUser = users.find(
        user => user.username === username
    );

    if (existingUser) {
        return res.status(400).json({
            message: "Username sudah digunakan"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword
    };

    users.push(newUser);
    res.status(201).json({
        message: "Registrasi berhasil"
    });
};

//========= Login =========
exports.login = async (req, res) => {

    const { username, password } = req.body;
    const user = users.find(
        user => user.username === username
    );
    if (!user) {
        return res.status(401).json({
            message: "Username atau password salah"
        });
    }

    const isMatch = await bcrypt.compare(
        password,
        user.password
    );
    if (!isMatch) {
        return res.status(401).json({
            message: "Username atau password salah"
        });
    }

    const token = generateToken(user);
    res.json({
        message: "Login berhasil",
        token
    });

};