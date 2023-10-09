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
      <h1>My Tasks</h1>
      <TodoList />
      <div className="center-item">
        <button onClick={handleAddTask} className="btn">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default HomePage;
