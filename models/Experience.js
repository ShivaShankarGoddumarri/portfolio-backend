const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  id: Number,
  img: String,
  role: String,
  company: String,
  date: String,
  desc: String,
  skills: [String],
});

module.exports = mongoose.model("Experience", experienceSchema);
