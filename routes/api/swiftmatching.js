const express = require("express");
const router = express.Router();
const fs = require("fs");

// Load input validation
const validateMt300Input = require("../../validation/mt300Input");

// Load Mt300 Model
const Mt300 = require("../../models/Mt300");

// @route   GET api/swiftmatching/test
// @desc    Tests swiftmatching route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Swift Matching Works" }));

// @route   POST api/swiftmatching/loadmt300
// @desc    used to load/store MT300 table
// @access  Public
router.post("/loadmt300", (req, res) => {
  const { errors, isValid } = validateMt300Input(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Mt300.findOne({ tag: req.body.tag })
    .then(record => {
      if (record) {
        errors.tag = "Tag already exists";
        return res.status(400).json(errors);
      } else {
        const newRec = new Mt300({
          tag: req.body.tag,
          description: req.body.description,
          matched: req.body.matched,
          clientconf: req.body.clientconf
        });

        newRec
          .save()
          .then(rec => res.json(rec))
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

// @route POST api/swiftmatching/search
// @desc  used to search and for used to match on Bank confirmation
// @access  Public
router.post("/search", (req, res) => {
  const { errors, isValid } = validateMt300Input(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  fs.readFile(
    "C:\\Users\\amith\\OneDrive\\Desktop\\FullStack\\Sample data\\OneToOneMatchingSampleData\\ClientOneToOneMatchingSampleData\\1_message.txt",
    (err, data) => {
      if (err) throw err;
      const cstring = data.toString();
      //const cdata = JSON.parse(cstring);
      console.log(cstring);
    }
  );

  /*Mt300.find({ tag: "30T" })
    .then(rec => {
      if (rec.matched === "YES") {
        if (ctdate === sgtdate) {
        } else {
          console.log("Trading Date should be matched.");
        }
      }
    })
    .catch(err => console.log(err));*/
});

module.exports = router;
