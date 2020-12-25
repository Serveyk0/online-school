const express = require("express");
const router = express.Router();
const User = require("../models/users");
const aes256 = require('aes256');
const sha512 = require('js-sha512').sha512;

router.get("/", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _user = await User.find({ email: req.query.email })
        if (_user.length === 0)
            throw ({ message: "Не существует пользователя с таким логином" });
        var key = sha512(_user[0].name);
        var plaintext = _user[0].password;
        _user[0].password = aes256.decrypt(key, plaintext);
        if (_user[0].password !== req.query.password)
            throw ({ message: "Не верный логин или пароль" });
        else
            await res.json({ id: _user[0]._id, name: _user[0].name, surname: _user[0].surname });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/local", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _user = await User.find({ id: req.query.id })
        console.log(_user.length);
        if (_user.length === 0)
            throw ({ message: "Не существует пользователя с таким логином" });
        await res.json({ name: _user[0].name, surname: _user[0].surname });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/", async (req, res, next) => {
    const cryptName = sha512(req.query.name);
    var key = cryptName;
    var plaintext = req.query.password;
    var password = aes256.encrypt(key, plaintext);
    const user = new User({
        name: req.query.name,
        surname: req.query.surname,
        email: req.query.email,
        password: password
    });
    try {
        const new_user = user.save();
        await res.status(201).json(new_user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;