const express = require("express");
const router = express.Router();
const Course = require("../models/courses");
const mongoose = require('mongoose');


var multer = require('multer');

const PATH = './public/';


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/images');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});


const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
        }
    }
});



router.get("/", async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    try {
        const _course = await Course.find()
        await res.json(_course);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post("/", async (req, res, next) => 
{
    const course = new Course(req.body);
    try {
        const new_course = course.save();
        await res.status(201).json(new_course);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.post("/update", async (req, res, next) => {
    console.log(req.body);
    Course.updateOne({_id: req.body._id}, req.body, { new: true }, function (err, result) {
        if (err)
            res.status(500).json({ message: err.message });
        console.log("Обновленный объект", result);
        res.json(result);
    });
})

router.post("/uploadImage", upload.single("file"), function (req, res) {
    console.log(req.file.path);
    res.end();
});
module.exports = router;