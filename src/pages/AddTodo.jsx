import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [taskText, setTaskText] = useState(""); // Add state for taskText

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(taskText));
    setTaskText("");
    navigate("/");
  };

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <div>
      <TodoForm
        onSubmit={handleFormSubmit}
        buttonText="Add Task"
        value={taskText} // Pass the taskText value to the TodoForm
        onChange={handleTaskChange} // Pass the onChange handler to the TodoForm
      />
    </div>
  );
};

export default AddTodo;
