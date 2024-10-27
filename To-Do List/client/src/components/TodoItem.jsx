import axios from "axios";
import React, { useState } from "react";
import { base_Url } from "../utils/api";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const TodoItem = ({ todo, fetchTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.task);

  const toggleComplete = async (id) => {
    try {
      await axios.patch(`${base_Url}/todos/${id}`, {
        completed: !todo.completed,
      });
      toast.info("Task updated!");
      await fetchTodos();
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${base_Url}/todos/${id}`);
      toast.success("Task Deleted");
      await fetchTodos();
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  const updateTodo = async (id) => {
    try {
      await axios.patch(`${base_Url}/todos/${id}`, {
        task: editText,
      });

      await fetchTodos();
      setIsEditing(false);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <li className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm hover:bg-gray-100 transition">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo._id)}
          className="form-checkbox h-5 w-5 text-green-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-1 rounded w-full"
          />
        ) : (
          <span
            className={`text-gray-800 ${todo.completed ? "line-through" : ""}`}
          >
            {todo.task}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <button
            className="text-blue-500 hover:text-blue-600"
            onClick={() => updateTodo(todo._id)}
          >
            Save
          </button>
        ) : (
          <button
            className="text-gray-500 hover:text-gray-600"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="text-red-500 hover:text-red-600"
          onClick={() => deleteTodo(todo._id)}
        >
          <FaTrash className="w-5 h-5" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
