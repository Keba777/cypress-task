import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";

const CompletedTodoCard = ({ todo, handleEditTask, handleRemoveTask }) => {
  return (
    <div key={todo.id} className="task-completed task-item">
      <p>{todo.text}</p>
      <span>
        <button className="icon-task" onClick={() => handleEditTask(todo.id)}>
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
  );
};

export default CompletedTodoCard;
