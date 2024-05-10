import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, filter, toggleTaskCompletion, editTask, deleteTask }) => {
  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => filter === task.completed);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={() => toggleTaskCompletion(task.id)}
          editTask={() => editTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;

