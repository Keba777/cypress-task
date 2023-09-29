import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../slices/todoSlice";

const EditTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [editedTaskText, setEditedTaskText] = useState("");
  const todos = useSelector((state) => state.todos);
  const { taskId } = useParams();

  // Use useEffect to set the initial task text based on taskId
  useEffect(() => {
    const todo = todos.find((todo) => todo.id === parseInt(taskId, 10));
    if (todo) {
      setEditedTaskText(todo.text);
    }
  }, [todos, taskId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Dispatching updateTodo with payload:", {
      id: parseInt(taskId, 10),
      text: editedTaskText,
    });
    dispatch(updateTodo({ id: parseInt(taskId, 10), text: editedTaskText }));
    navigate("/");
  };

  const handleTaskChange = (e) => {
    setEditedTaskText(e.target.value);
  };

  return (
    <div>
      <TodoForm
        onSubmit={handleFormSubmit}
        buttonText="Save Changes"
        value={editedTaskText}
        onChange={handleTaskChange}
      />
    </div>
  );
};

export default EditTodo;
