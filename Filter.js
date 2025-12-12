import React from 'react';

export default function Filter({ filter, setFilter }) {
  return (
    <div className="filter">
      <input
        className="input"
        type="text"
        placeholder="Фильтр по имени или должности..."
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
  );
}
