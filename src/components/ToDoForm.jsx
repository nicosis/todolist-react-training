import React, { useState } from "react";
import "../styles/ToDoForm.css";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({ handleNewTask }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input !== "") {
      const newTask = {
        id: uuidv4(),
        text: input,
        done: false,
      };
      handleNewTask(newTask);
      setInput("");
    }
  };

  return (
    <div className="todoform-container">
      <input
        className="todoform-input"
        value={input}
        maxLength={120}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ToDoForm;
