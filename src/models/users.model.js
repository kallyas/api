const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    min: 5,
    max: 100,
  },
  userEmail: {
    type: String,
    min: 25,
    max: 100,
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema);
