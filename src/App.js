import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Filters from './Filters';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const editTask = (taskId) => {
    // Implementar la lógica para editar la descripción de una tarea
    console.log(`Editar tarea con ID: ${taskId}`);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Aplicación de gestión de tareas</h1>
      <TaskForm addTask={addTask} />
      <Filters filter={filter} setFilter={setFilter} />
      <TaskList tasks={tasks} filter={filter} toggleTaskCompletion={toggleTaskCompletion} editTask={editTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;

