const mongoose = require("mongoose");

const LoginScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ned name"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone number is must for authentication"],
    trim: true,
  },
  pass: {
    type: String,
    required: [true, "Password is must"],
    trim: true,
  },
});

module.exports = mongoose.model("login", LoginScheme);
