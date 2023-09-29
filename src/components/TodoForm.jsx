import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../slices/todoSlice";

const TodoForm = ({ taskId, buttonText }) => {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() === "") return;

    if (taskId) {
      // Edit task
      dispatch(updateTodo({ id: taskId, text: taskText }));
    } else {
      // Add task
      dispatch(addTodo(taskText));
    }

    setTaskText("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleTaskChange}
        placeholder="Enter a task"
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TodoForm;
