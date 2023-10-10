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
    <div
      key={todo.id}
      className=" bg-slate-800 border rounded-lg px-4 py-3 mb-2 flex justify-between "
    >
      <p className="text-white text-lg">{todo.text}</p>
      <span>
        <button
          className=" bg-transparent border-none mr-3 "
          onClick={() => handleCompletTask(todo.id)}
        >
          <MdDone fontSize={20} color="#aaa" />
        </button>
        <button
          className=" bg-transparent border-none mr-3 "
          onClick={() => handleEditTask(todo.id)}
        >
          <FaRegEdit fontSize={20} color="#aaa" />
        </button>
        <button
          className=" bg-transparent border-none mr-3 "
          onClick={() => handleRemoveTask(todo.id)}
        >
          <LuDelete fontSize={20} color="#bb0000" />
        </button>
      </span>
    </div>
  );
};

export default UncompletedTodoCard;
