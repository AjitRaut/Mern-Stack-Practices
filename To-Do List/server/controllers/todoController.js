const Todo = require("../models/todo");

const createTodo = async (req, res) => {
  try {
    const { task } = req.body;

    if (!task) {
      return res.status(500).json({ msg: "Fill the task" });
    }
    const new_todo = new Todo({ task });
    await new_todo.save();
    res.status(200).json({ new_todo });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

const getTodos = async (req, res) => {
  try {
    const Todos = await Todo.find();
    if (!Todos) {
      return res.status(404).json({ msg: "Todods Not Found" });
    }
    res.status(200).json({ Todos });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await Todo.findById(id);

    if (!deleteTodo) {
      return res.status(404).json({ ms: "Todo not found" });
    }

    await Todo.findByIdAndDelete(id);
    res.status(200).json({ msg: "Todo Dlete SuccesFully" });
  } catch (error) {
    console.log(error);
  }
};

const deleteAllTodos = async (req, res) => {
  try {
    const deleteAllTodos = await Todo.deleteMany({});

    if (deleteAllTodos.deletedCount === 0) {
      return res.status(404).json({ msg: "Todods Not Found" });
    }
    res.status(200).json({
      msg: "All Todos Dleted",
      deletCount: deleteAllTodos.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
};

module.exports = { createTodo, getTodos, deleteTodo, deleteAllTodos };
