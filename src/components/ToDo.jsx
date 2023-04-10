import React from "react";
import "../styles/ToDo.css";
import { TiDelete } from "react-icons/ti";

const ToDo = () => {
  return (
    <div className="todo-container">
      <p>tarea 1</p>
      <span className="todo-icon">
        <TiDelete />
      </span>
    </div>
  );
};

export default ToDo;
