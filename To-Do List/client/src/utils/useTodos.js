import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_Url } from "../utils/api";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${base_Url}/todos`);
      setTodos(response?.data?.Todos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {todos , fetchTodos};
};

export default useTodos;
