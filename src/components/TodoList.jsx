import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../slices/todoSlice";
import { Link, useNavigate } from "react-router-dom";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleTask = (id) => {
    dispatch(updateTodo(id));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTask = (id) => {
    navigate(`todos/edit/${id}`);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTask(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEditTask(todo.id)}>Edit</button>
            <button onClick={() => handleRemoveTask(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="todos/add">Add Task</Link>
    </>
  );
};

export default TodoList;
