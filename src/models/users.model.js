const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  useremail: {
    type: String,
    min: 25,
    max: 100,
    unquine: true,
  },
});

module.exports = mongoose.model("User", userSchema);
