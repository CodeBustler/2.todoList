import React from 'react';
import './style.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState('');

  // Function to add a new task to the tasks array
  const addTask = () => {
    if (inputTask.trim() !== '') {
      setTasks([...tasks, { text: inputTask, completed: false }]);
      setInputTask('');
    }
  };

  // Handle input change event
  const handleTaskInput = (e) => {
    setInputTask(e.target.value);
  };

  // Function to delete a task from the tasks array
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  // Function to mark a task as complete
  const taskComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="app-container">
      <h1>TodoList</h1>
      <div className="input-items">
        <input
          type="text"
          placeholder="Add task.."
          value={inputTask}
          onChange={handleTaskInput}
        />
        <input type="button" value="Add" onClick={addTask} />
      </div>

      {/* Conditional rendering for tasks or quote */}
      {tasks.length === 0 ? (
        <span className="quote">
          Productivity is prioritizing what matters, organizing tasks for
          progress.
        </span>
      ) : (
        <ul className="list-container">
          {/* Mapping tasks to list items */}
          {tasks.map((task, index) => (
            <div className="list-item-container" key={index}>
              <li
                className="list-item"
                onClick={() => taskComplete(index)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}
              >
                {index + 1}. {task.text}
              </li>
              {/* Delete button */}
              <i
                className="fa-solid fa-trash"
                onClick={() => deleteTask(index)}
              ></i>
            </div>
          ))}
        </ul>
      )}
      <span>By CodeBustler</span>
    </div>
  );
}

export default App;
