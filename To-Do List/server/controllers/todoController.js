const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(500).json({ msg: "Fill the task" });
    }
    const new_todo = new Todo({ task });
    await new_todo.save;
    res.status(200).json({ msg: new_todo });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createTodo };
