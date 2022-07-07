const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  taskName: {
    type: String,
    default: "",
    required: [true, "name is required"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  time: {
    type: String,
  },
  isComplete: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
