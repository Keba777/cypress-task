import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../slices/todoSlice";
import { useNavigate } from "react-router-dom";
import CompletedTodoCard from "./CompletedTodoCard";
import UncompletedTodoCard from "./UncompletedTodoCard";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCompletTask = (id) => {
    dispatch(completeTodo({ id, completed: true }));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTask = (id) => {
    navigate(`todos/edit/${id}`);
  };

  return (
    <>
      <div className="px-6 sm:grid grid-cols-2 gap-5 mb-6">
        <div className=" bg-gray-400 border rounded-2xl p-6">
          <h2 className="text-3xl font-semibold mb-4">Tasks</h2>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <UncompletedTodoCard
                key={todo.id}
                todo={todo}
                handleCompletTask={handleCompletTask}
                handleEditTask={handleEditTask}
                handleRemoveTask={handleRemoveTask}
              />
            ))}
        </div>
        <div className="bg-gray-400 border rounded-2xl p-6">
          <h2 className="text-3xl font-semibold mb-4">Completed Tasks</h2>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <CompletedTodoCard
                key={todo.id}
                todo={todo}
                handleEditTask={handleEditTask}
                handleRemoveTask={handleRemoveTask}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
