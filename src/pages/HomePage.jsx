import React from "react";
import TodoList from "../components/TodoList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleAddTask = () => {
    navigate("todos/add");
  };
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4" data-testid="main-title">
        My Tasks
      </h1>
      <TodoList />
      <div className="flex justify-center">
        <button
          onClick={handleAddTask}
          className="bg-blue-900 px-3 py-2 rounded-lg w-2/6 text-gray-200 text-lg hover:bg-blue-950"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default HomePage;
