const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const Mt300Schema = new Schema({
  tag: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  matched: {
    type: String,
    required: true
  },
  clientconf: {
    type: String
  }
});

module.exports = User = mongoose.model("mt300", Mt300Schema);
