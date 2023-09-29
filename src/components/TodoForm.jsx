import React from "react";

const TodoForm = ({ onSubmit, buttonText, value, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a task"
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default TodoForm;
