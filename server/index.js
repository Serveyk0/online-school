const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3007
var cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const courseRoutes = require("./routes/courses.js");
app.use("/api/courses", courseRoutes);
const userRoutes = require("./routes/users.js");
app.use("/api/users", userRoutes);
const mailRoutes = require("./routes/mail.js");
app.use("/api/mail", mailRoutes);
async function start() {
  console.log(process.env)
  try {
    mongoose.connect(`mongodb+srv://${process.env.LOGIN}:${process.env.DB_PWD}@${process.env.CLUSTER}.hvvrs.mongodb.net/${process.env.COLEECTION}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(PORT, () => {
      console.log("server start");
    })
  } catch (e) {
    console.log(e);
  }
}
start();