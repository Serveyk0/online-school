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

router.post("/update", async (req, res, next) => 
{
    console.log(req.body)
    // const my_course = req.body;
    // const course = new Course({
    //     my_course
    // });
    // try {
    //     course.updateOne({_id: req.body._id}, { $set: { "name": req.body.name } } );
    //     await res.status(201);
    // } catch (err) {
    //     res.status(400).json({ message: err.message });
    // }
})

module.exports = router;