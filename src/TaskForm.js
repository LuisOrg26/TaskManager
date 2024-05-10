import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newTask = { id: Date.now(), title, description, completed: false };
      addTask(newTask);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Título:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Descripción:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Agregar tarea</button>
    </form>
  );
};

export default TaskForm;
