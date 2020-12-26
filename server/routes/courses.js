const express = require("express");
const router = express.Router();
const Course = require("../models/courses");
const mongoose = require('mongoose');

router.get("/", async (req, res) => 
{
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _course = await Course.find()
        await res.json(_course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/update", async (req, res, next) => 
{
    console.log(req.body._id);
    var query = {name:"Здоровий малюк"};
    Course.findByIdAndUpdate(req.body._id, {name: req.body.name}, {new: true}, function(err, result){
        mongoose.disconnect();
        if(err) return console.log(err);
        console.log("Обновленный объект", result);
    });
})

router.post("/uploadImage", async (req, res, next) => 
{
    console.log(req.body._id);
    var query = {name:"Здоровий малюк"};
    Course.findByIdAndUpdate(req.body._id, {name: req.body.name}, {new: true}, function(err, result){
        mongoose.disconnect();
        if(err) return console.log(err);
        console.log("Обновленный объект", result);
    });
})

module.exports = router;