const mongoose = require("mongoose");

const TaskScheme = new mongoose.Schema({
  count: {
    type: String,
    required: [true, "Needed"],
  },
  name: {
    type: String,
    required: [true, "Needed"],
  },
});

module.exports = mongoose.model("availability", TaskScheme);
