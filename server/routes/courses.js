const express = require("express");
const router = express.Router();
const Course = require("../models/courses");

let multer = require('multer');


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
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif" || file.mimetype == "image/webp") {
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
        console.log(await new_course)
        await res.status(201).json(await new_course);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.delete("/:id", (req, res) => {
    let query = { _id: req.params.id }
    console.log(query);
    Course.deleteOne(query, (err) => {
      if(err){
        res.send({message: "Error while deleting todo", check_delete: false})
      }else{
        res.send({message: "Todo deleted", check_delete: true});
      }
    })
  })

router.post("/update", async (req, res, next) => {
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