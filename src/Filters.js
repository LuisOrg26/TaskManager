import React from 'react';

const Filters = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Filtrar por:</label>
      <button onClick={() => setFilter('all')}>Todas</button>
      <button onClick={() => setFilter('completed')}>Completadas</button>
      <button onClick={() => setFilter('pending')}>Pendientes</button>
    </div>
  );
};

export default Filters;

