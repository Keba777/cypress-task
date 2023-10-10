import React from "react";

const TodoForm = ({ onSubmit, buttonText, value, onChange }) => {
  return (
    <div className="flex justify-center p-8">
      <form
        className="flex flex-col justify-center p-10 bg-slate-700 w-3/5 rounded-xl"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter a task"
          className="block px-3 py-2 rounded-md mb-4"
        />
        <div className="flex justify-center">
          <button
            className="bg-amber-900 px-3 py-2 rounded-lg w-2/6 text-gray-200 text-lg hover:bg-amber-950"
            type="submit"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
