const mongoose = require("mongoose");

const bioSchema = new mongoose.Schema({
  name: String,
  roles: [String],
  description: String,
  github: String,
});

module.exports = mongoose.model("Bio", bioSchema);
