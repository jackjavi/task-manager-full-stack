const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
  },
  date: {
    type: String,
  },
  desc: {
    type: String,
  },
});

module.exports = mongoose.model("Task", taskSchema);
