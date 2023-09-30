import React from "react";

const TodoForm = ({ onSubmit, buttonText, value, onChange }) => {
  return (
    <div className="center-item">
      <form className="form-container" onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter a task"
          className="form-input"
        />
        <div className="center-item">
          <button className="btn" type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
