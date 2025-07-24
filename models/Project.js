const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  tags: [String],
  date: String,
  category: String,
  github: String,
  webapp: String,
});

module.exports = mongoose.model("Project", ProjectSchema);
