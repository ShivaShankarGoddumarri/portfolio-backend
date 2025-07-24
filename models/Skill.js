const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  title: String,
  skills: [
    {
      name: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model("Skill", skillSchema);
