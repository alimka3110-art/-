import React from 'react';
import { POSITIONS } from '../constants';

export default function EmployeeFilter({ filter, setFilter, sort, setSort, minSalary, setMinSalary, maxSalary, setMaxSalary, positionFilter, setPositionFilter }) {
  return (
    <div className="employee-filter-container">
      <div className="employee-filter">
        <div className="filter-input-wrapper">
          <span className="filter-icon">🔍</span>
          <input
            className="input"
            type="text"
            placeholder="Поиск по имени..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>
        <div className="filter-select-wrapper">
          <span className="filter-icon">↑↓</span>
          <select className="input" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="name">По имени (A-Z)</option>
            <option value="position">По должности</option>
            <option value="salary-desc">По зарплате (↓)</option>
            <option value="salary-asc">По зарплате (↑)</option>
          </select>
        </div>
      </div>
      <div className="filter-position">
        <div className="salary-input-wrapper">
          <span className="filter-icon">🏷️</span>
          <select className="input" value={positionFilter} onChange={e => setPositionFilter(e.target.value)}>
            <option value="all">Все должности</option>
            {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
      </div>
      <div className="filter-salary">
        <div className="salary-input-wrapper">
          <span className="filter-icon">💰</span>
          <input
            className="input"
            type="number"
            placeholder="От ₸"
            value={minSalary}
            onChange={e => setMinSalary(e.target.value)}
          />
        </div>
        <div className="salary-input-wrapper">
          <span className="filter-icon">💰</span>
          <input
            className="input"
            type="number"
            placeholder="До ₸"
            value={maxSalary}
            onChange={e => setMaxSalary(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
