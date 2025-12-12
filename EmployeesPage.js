import React, { useState } from 'react';
import EmployeeList from '../components/EmployeeList';
import EmployeeFilter from '../components/EmployeeFilter';

export default function EmployeesPage({ employees, onDelete, onEdit }) {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');
  const [positionFilter, setPositionFilter] = useState('all');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');

  // Фильтрация по имени, должности и зарплате
  const filtered = employees.filter(emp => {
    const matchesText = emp.name.toLowerCase().includes(filter.toLowerCase());
    const matchesPosition = positionFilter === 'all' ? true : emp.position === positionFilter;
    const min = minSalary ? Number(minSalary) : 0;
    const max = maxSalary ? Number(maxSalary) : Infinity;
    const matchesSalary = emp.salary >= min && emp.salary <= max;
    return matchesText && matchesPosition && matchesSalary;
  });

  // Сортировка
  const sorted = [...filtered].sort((a, b) => {
    if (sort === 'name') return a.name.localeCompare(b.name, 'ru');
    if (sort === 'position') return a.position.localeCompare(b.position, 'ru');
    if (sort === 'salary-asc') return a.salary - b.salary;
    if (sort === 'salary-desc') return b.salary - a.salary;
    return 0;
  });

  return (
    <section className="employees-page">
      <div className="employees-page-header">
        <h2>Сотрудники ({sorted.length})</h2>
        <EmployeeFilter 
          filter={filter} 
          setFilter={setFilter} 
          sort={sort} 
          setSort={setSort}
          minSalary={minSalary}
          setMinSalary={setMinSalary}
          maxSalary={maxSalary}
          setMaxSalary={setMaxSalary}
          positionFilter={positionFilter}
          setPositionFilter={setPositionFilter}
        />
      </div>
      <EmployeeList employees={sorted} onDelete={onDelete} onEdit={onEdit} />
    </section>
  );
}
