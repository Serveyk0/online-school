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
            await res.json({ id: _user[0]._id, name: _user[0].name, surname: _user[0].surname, status: _user[0].status });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get("/all_users", async (req, res) => {
    const _user = await User.find({}, { password: 0 })
    console.log(_user);
    await res.json(_user);
})

router.get("/local", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _user = await User.find({ id: req.body.id }, { password: 0 })
        console.log(_user.length);
        if (_user.length === 0)
            throw ({ message: "Не существует пользователя с таким логином" });
        await res.json({ name: _user[0].name, surname: _user[0].surname, status: _user[0].status });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/", async (req, res, next) => {
    const cryptName = sha512(req.body.name);
    var key = cryptName;
    var plaintext = req.body.password;
    var password = aes256.encrypt(key, plaintext);
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        password: password,
        status: req.body.status
    });
    try {
        const new_user = user.save();
        await res.status(201).json(new_user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.post("/update", async (req, res, next) => {
    const users = req.body;
    try {
        for (let i = 0; i < users.length; i++) {
            User.updateOne({ _id: users[i]._id }, users[i], { new: true }, function (err, result) {
                if (err)
                    res.status(500).json({ message: err.message });
                console.log("Обновленный объект", result);
            });
        }
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = router;