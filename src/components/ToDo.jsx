import React from "react";
import "../styles/ToDo.css";
import { TiDelete } from "react-icons/ti";

const ToDo = ({ id, text, done, handleTaskDone, handleDelete }) => {
  return (
    <div
      className={`todo-container blur-in-expand ${done ? "task_done" : ""}`}
      key={id}
      onClick={(e) => {
        e.stopPropagation();
        handleTaskDone(id);
      }}
    >
      <p key={id}>{text}</p>
      <span className="todo-icon">
        <TiDelete
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
          }}
        />
      </span>
    </div>
  );
};

export default ToDo;
