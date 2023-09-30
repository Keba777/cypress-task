import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../slices/todoSlice";
import { useNavigate } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";
import { MdDone } from "react-icons/md";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCompletTask = (id) => {
    dispatch(completeTodo({ id, completed: true })); // Pass an object with 'id' and 'completed'
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditTask = (id) => {
    navigate(`todos/edit/${id}`);
  };

  const handleAddTask = () => {
    navigate("todos/add");
  };

  return (
    <>
      <div className="container">
        <div className="task-container">
          <h2>Tasks</h2>
          {todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <div key={todo.id} className="task-uncompleted task-item">
                <p>{todo.text}</p>
                <span>
                  <button
                    className="icon-task"
                    onClick={() => handleCompletTask(todo.id)}
                  >
                    <MdDone fontSize={25} color="#34495e" />
                  </button>
                  <button
                    className="icon-task"
                    onClick={() => handleEditTask(todo.id)}
                  >
                    <FaRegEdit fontSize={25} color="#34495e" />
                  </button>
                  <button
                    className="icon-delete"
                    onClick={() => handleRemoveTask(todo.id)}
                  >
                    <LuDelete fontSize={25} color="#b62424" />
                  </button>
                </span>
              </div>
            ))}
        </div>
        <div className="task-container">
          <h2>Completed Tasks</h2>
          {todos
            .filter((todo) => todo.completed)
            .map((todo) => (
              <div key={todo.id} className="task-completed task-item">
                <p>{todo.text}</p>
                <span>
                  <button
                    className="icon-task"
                    onClick={() => handleEditTask(todo.id)}
                  >
                    <FaRegEdit fontSize={25} color="#34495e" />
                  </button>
                  <button
                    className="icon-delete"
                    onClick={() => handleRemoveTask(todo.id)}
                  >
                    <LuDelete fontSize={25} color="#b62424" />
                  </button>
                </span>
              </div>
            ))}
        </div>
      </div>
      <div className="center-button">
        <button onClick={handleAddTask} className="btn">
          Add Task
        </button>
      </div>
    </>
  );
};

export default TodoList;
