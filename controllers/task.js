const Task = require("../model/taskModel");

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
    console.log(error);
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) {
      res.status(400).json({
        message: `No Task with ${id} !`,
      });
      return;
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(400).json({
        message: `No Task with ${id} exists! `,
      });
      return;
    }
    res.status(200).send("Task Deleted successfully!!");
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};
