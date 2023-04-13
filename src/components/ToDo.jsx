import React from "react";
import "../styles/ToDo.css";
import { TiDelete } from "react-icons/ti";

const ToDo = ({
  id,
  text,
  done,
  handleTaskDone,
  handleDelete,
  handleBlurOut,
  blurOutId,
  handleHoverDlt,
  hoveredIndex,
}) => {
  return (
    <div
      className={`todo-container blur-in-expand ${done ? "task_done" : ""} 
      ${blurOutId === id ? "blur-out-expand" : ""}`}
      key={id}
      onClick={(e) => {
        e.stopPropagation();
        handleTaskDone(id);
      }}
      onMouseEnter={() => handleHoverDlt(id)}
      onMouseLeave={() => handleHoverDlt(-1)}
    >
      <p>{text}</p>
      <span className="todo-icon">
        {(hoveredIndex === id) && (
        <TiDelete
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(id);
            handleBlurOut(id);
          }}
            />
          )}
      </span>
    </div>
  );
};

export default ToDo;
