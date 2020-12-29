const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post("/", async (req, res, next) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    const mail = (req.body);
    const new_string = `Ім'я: ${mail.name}\nПрізвище: ${mail.surname}\nEmail:${mail.email}\nТелефон:${mail.phone}`;
    console.log(mail);
    
    await transporter.sendMail({
        from: '"noreply@vubo.org.ua',
        to: "maximum.lenovo.ml@gmail.com",
        subject: "Attachments",
        text: new_string,
      });
})

module.exports = router;