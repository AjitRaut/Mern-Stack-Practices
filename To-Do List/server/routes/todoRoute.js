const express = require("express");
const {
  createTodo,
  getTodos,
  deleteTodo,
  deleteAllTodos,
} = require("../controllers/todoController");

const router = express.Router();
router.post("/", createTodo);
router.get("/", getTodos);
router.delete("/:id", deleteTodo);
router.delete("/", deleteAllTodos);

module.exports = router;
