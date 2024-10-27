import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import useTodos from "../utils/useTodos";

const TodoList = () => {
  const { todos, fetchTodos } = useTodos();

  return (
    <div className=" min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          My To-Do List
        </h2>
        <TodoForm fetchTodos={fetchTodos} />

        {todos.length > 0 ? (
          <ul className="mt-4 space-y-2">
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-center text-gray-600">No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
