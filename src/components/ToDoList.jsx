import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "../styles/ToDoList.css";
import { TiDelete } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleDelete = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input !== "") {
      const newTask = {
        id: uuidv4(),
        text: input,
        done: false,
      };
      setTask([...task, newTask]);
      setInput("");
      console.log("vaciado");
    }
  };

  const handleTaskDone = (id) => {
    console.log(id);
    setTask(
      task.map((doneItm) => {
        if (doneItm.id === id) {
          doneItm.done = !doneItm.done;
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
      {task.map((item) => (
        <ToDo
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          handleDelete={handleDelete}
          handleTaskDone={handleTaskDone}
        />
      ))}
    </div>
  );
};

export default ToDoList;
