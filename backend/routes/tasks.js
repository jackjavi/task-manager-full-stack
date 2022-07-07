const express = require("express");
const {
  getAllTasks,
  getSingleTask,
  addSingleTask,
  ModifyTask,
  deleteTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(addSingleTask);

router.route("/:id").get(getSingleTask).patch(ModifyTask).delete(deleteTask);

module.exports = router;
