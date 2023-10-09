import React from "react";
import { MdDone } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";

const UncompletedTodoCard = ({
  todo,
  handleCompletTask,
  handleEditTask,
  handleRemoveTask,
}) => {
  return (
    <div key={todo.id} className="task-uncompleted task-item">
      <p>{todo.text}</p>
      <span>
        <button
          className="icon-task"
          onClick={() => handleCompletTask(todo.id)}
        >
          <MdDone fontSize={25} color="#34495e" />
        </button>
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

export default UncompletedTodoCard;
