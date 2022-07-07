const { findById, translateAliases } = require("../Models/Task");
const Task = require("../Models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.header("Access-Control-Allow-Origin", "*");
    res.send(tasks);
  } catch (error) {
    res.send({ msg: error });
  }
};

const addSingleTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!req.params.id) {
      res.status(404).json({ msg: `No user with id : ${req.params.id}` });
    }
    res.status(500).json(task);
  } catch (err) {
    console.log(err);
  }
};

const ModifyTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true, runVallidators: true }
    );

    if (!task) {
      res.status(404).json({ msg: `No task with ID: ${req.params.id}` });
      return;
    }
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id });
    if (!task) {
      res.status(404).json({ msg: `No task with ID: ${req.params.id}` });
      return;
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  addSingleTask,
  ModifyTask,
  deleteTask,
};
