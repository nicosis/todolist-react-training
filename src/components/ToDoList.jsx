import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "../styles/ToDoList.css";
import { TiDelete } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  console.log(task);

  const handleDelete = (index) => {
    setTask(task.filter((item) => item.id !== index));
    console.log("deleted");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input !== "") {
      const newTask = {
        id: uuidv4(),
        text: input,
        done: false,
      };
      setTask([newTask, ...task]);
      setInput("");
      console.log("vaciado");
    }
  };

  const handleTaskDone = (index) => {
    console.log(index);
    setTask(
      task.map((doneItm, doneIdx) => {
        if (doneIdx === index) {
          return { ...doneItm, done: !doneItm.done };
        }
        return doneItm;
      })
    );
  };

  return (
    <div className="todolist-container">
      <div className="todoform-container">
        <input
          className="todoform-input"
          value={input}
          maxLength={120}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
      {task.map((item, index) => (
        <div
          className={`todo-container ${item.done ? "task_done" : ""}`}
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            handleTaskDone(index);
          }}
        >
          <p key={index}>{item.text}</p>
          <span className="todo-icon">
            <TiDelete
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(item.id);
              }}
            />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
