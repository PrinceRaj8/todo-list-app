import React from "react";

const ToDoItem = ({ task, index, deleteTask, toggleTaskCompletion }) => {
  return (
    <li className={task.completed ? "completed" : ""}>
      <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
      <button onClick={() => deleteTask(index)}>X</button>
    </li>
  );
};

export default ToDoItem;
