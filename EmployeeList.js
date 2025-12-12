import React from 'react';
import EmployeeCard from './EmployeeCard';

export default function EmployeeList({ employees, onDelete, onEdit }) {
  if (!employees.length) return <div className="no-employees">Нет сотрудников</div>;

  return (
    <div className="employee-list">
      {employees.map(emp => (
        <EmployeeCard key={emp.id} emp={emp} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}
