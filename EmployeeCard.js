import React from 'react';

export default function EmployeeCard({ emp, onDelete, onEdit }) {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('kk-KZ', { 
      style: 'currency', 
      currency: 'KZT',
      maximumFractionDigits: 0
    }).format(salary).replace('₸', '').trim() + ' ₸';
  };

  return (
    <div className="employee-card">
      <div className="employee-card-main">
        <div className="employee-avatar">{emp.name[0]}</div>
        <div>
          <div className="employee-name">{emp.name}</div>
          <div className="employee-position">{emp.position}</div>
        </div>
      </div>
      <div className="employee-salary">💵 {formatSalary(emp.salary)}</div>
      <div className="employee-card-actions">
        <button className="btn" onClick={() => onEdit(emp.id)}>Изменить</button>
        <button className="btn danger" onClick={() => onDelete(emp.id)}>Удалить</button>
      </div>
    </div>
  );
}
