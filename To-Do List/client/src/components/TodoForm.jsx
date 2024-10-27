import axios from "axios";
import React, { useState } from "react";
import { base_Url } from "../utils/api";
import { toast } from "react-toastify";

const TodoForm = ({ fetchTodos }) => {
  const [todo, settodo] = useState("");

  const handlSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_Url}/todos`, {
        task: todo,
      });
      toast.success("Task Added SuccessFully");
      await fetchTodos();
      settodo("");
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <form
      onSubmit={handlSubmit}
      className="bg-white p-4 rounded-lg shadow-md flex space-x-2"
    >
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter a new task..."
        value={todo}
        onChange={(e) => settodo(e.target.value)}
        required
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
