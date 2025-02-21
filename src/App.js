import React, { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";
import ToDoItem from "./components/ToDoItem";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskText) => {
    if (taskText.trim() !== "") {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
