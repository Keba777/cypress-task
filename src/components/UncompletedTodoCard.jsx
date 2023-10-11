import React from "react";
import { MdDone } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { LuDelete } from "react-icons/lu";

const UncompletedTodoCard = ({
  todo,
  handleCompleteTask,
  handleEditTask,
  handleRemoveTask,
}) => {
  return (
    <div
      key={todo.id}
      className="bg-slate-800 border rounded-lg px-4 py-3 mb-2 flex justify-between uncompleted-todo-card"
    >
      <p className="text-white text-lg">{todo.text}</p>
      <span>
        <button
          className="bg-transparent border-none mr-3 complete-button"
          data-testid={`complete-button-${todo.id}`}
          onClick={() => handleCompleteTask(todo.id)}
        >
          <MdDone fontSize={20} color="#aaa" />
        </button>
        <button
          className="bg-transparent border-none mr-3 edit-button"
          data-testid={`edit-button-${todo.id}`}
          onClick={() => handleEditTask(todo.id)}
        >
          <FaRegEdit fontSize={20} color="#aaa" />
        </button>
        <button
          className="bg-transparent border-none mr-3 remove-button"
          data-testid={`remove-button-${todo.id}`}
          onClick={() => handleRemoveTask(todo.id)}
        >
          <LuDelete fontSize={20} color="#bb0000" />
        </button>
      </span>
    </div>
  );
};

export default UncompletedTodoCard;
