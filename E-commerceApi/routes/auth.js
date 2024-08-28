const router = require('express').Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

dotenv.config();

// Register
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(), // Changed DES to AES
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC); // Changed to AES
        const Orginalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        Orginalpassword !== req.body.password && res.status(401).json("Wrong credentials");
        const {password, ...others} = user._doc
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json("Server Error");
    }
});

module.exports = router;
