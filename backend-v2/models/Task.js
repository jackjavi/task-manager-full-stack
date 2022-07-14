const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
