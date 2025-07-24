const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  id: Number,
  school: String,
  date: String,
  degree: String,
  branch: String,
});

module.exports = mongoose.model("Education", educationSchema);
