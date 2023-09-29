import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTask = (id) => {
    dispatch(updateTodo(id));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTask(todo.id)}
          >
            {todo.text}
          </span>
          <button onClick={() => handleRemoveTask(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
