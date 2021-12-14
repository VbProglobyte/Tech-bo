// dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan')
// /////////////////////////////////////////
// live port connection 
const PORT = process.envPORT || 3000;

// initialize express 
const app = express();
// ////////////////////////////////////////////////////////

// START APP : NODE SERVER.JS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose connection 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// database connection to models
// const db = require("./models");

// routes for api and html
app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))

// /////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  