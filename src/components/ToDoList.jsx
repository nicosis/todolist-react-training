import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const ToDoList = () => {
  const [task, setTask] = useState([]);
  const [blurOutId, setBlurOutId] = useState(-1);
  console.log(blurOutId);

  const handleDelete = (id) => {
    setTimeout(() => {
      setTask(task.filter((item) => item.id !== id));
    }, 400);
    setBlurOutId(-1);
  };

  const handleBlurOut = (id) => {
    setBlurOutId(id);
  };

  const handleNewTask = (newTask) => {
    setTask([...task, newTask]);
  };

  const handleTaskDone = (id) => {
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
      <ToDoForm handleNewTask={handleNewTask} />
      {task.map((item) => (
        <ToDo
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
          handleDelete={handleDelete}
          handleTaskDone={handleTaskDone}
          handleBlurOut={handleBlurOut}
          blurOutId={blurOutId}
        />
      ))}
    </div>
  );
};

export default ToDoList;
