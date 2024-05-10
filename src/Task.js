import React from 'react';

const Task = ({ task, toggleTaskCompletion, editTask, deleteTask }) => {
  return (
    <li key={task.id}>
      <input type="checkbox" checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
      {task.title} - {task.description}
      <button onClick={() => editTask(task.id)}>Editar</button>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
