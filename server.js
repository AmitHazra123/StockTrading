const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

require("dotenv").config();


//here will be different route path
const users = require("./routes/api/users");




const app = express();

//Body parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

//passport middleware
app.use(passport.initialize());

//passport Config
require("./config/passport.js")(passport);

const path = require("path");
app.use(express.static(path.join(__dirname, "client/build")));

//use Routes goes here
app.use("/api/users", users);




app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function(
      err
    ) {
      if (err) {
        res.status(500).send(err);
      }
    });
  });
  const port = process.env.PORT || 5000;
  
  app.listen(port, () => console.log(`Server running on port ${port}`));
  