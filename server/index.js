const express = require('express');
const mongoose = require('mongoose');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3007
var cors = require('cors');
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const courseRoutes = require("./routes/courses.js");
app.use("/api/courses", courseRoutes);
const userRoutes = require("./routes/users.js");
app.use("/api/users", userRoutes);
async function start() {
  try {
    mongoose.connect('mongodb+srv://serveyko:STalker19@cluster0.hvvrs.mongodb.net/courses?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    app.listen(3008, () => {
      console.log("server start");
    })
  } catch (e) {
    console.log(e);
  }
}
start();