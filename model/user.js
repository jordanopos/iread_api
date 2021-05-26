const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 2 },
});

module.exports = mongoose.model("user", User);
