const express = require("express");
const router = express.Router();
const Course = require("../models/courses");

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

// router.post("/", async (req, res, next) => 
// {
//     const course = new Course({
//         name: req.body.name,
//         href: req.body.href
//     });
//     try {
//         const new_course = course.save();
//         await res.status(201).json(new_course);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// })

module.exports = router;