import React, { useState } from 'react';

export default function StatisticsPage({ employees }) {
  const [selectedPosition, setSelectedPosition] = useState('all');

  // Группировка по должностям
  const positionStats = {};
  employees.forEach(emp => {
    if (!positionStats[emp.position]) {
      positionStats[emp.position] = { count: 0, totalSalary: 0, employees: [] };
    }
    positionStats[emp.position].count += 1;
    positionStats[emp.position].totalSalary += emp.salary;
    positionStats[emp.position].employees.push(emp);
  });

  // Расчёт средней зарплаты по должности
  const stats = Object.entries(positionStats).map(([position, data]) => ({
    position,
    count: data.count,
    totalSalary: data.totalSalary,
    avgSalary: Math.round(data.totalSalary / data.count),
    employees: data.employees.sort((a, b) => b.salary - a.salary),
  }));

  const totalEmployees = employees.length;
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const avgSalary = totalEmployees > 0 ? Math.round(totalSalary / totalEmployees) : 0;
  const maxSalary = employees.length > 0 ? Math.max(...employees.map(e => e.salary)) : 0;
  const minSalary = employees.length > 0 ? Math.min(...employees.map(e => e.salary)) : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('kk-KZ', { 
      maximumFractionDigits: 0
    }).format(value) + ' ₸';
  };

  return (
    <section className="statistics-page">
      <h2>Статистика по сотрудникам</h2>
      
      <div className="stats-overview">
        <div className="stat-card">
          <div className="stat-label">Всего сотрудников</div>
          <div className="stat-value">{totalEmployees}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Средняя зарплата</div>
          <div className="stat-value">{formatCurrency(avgSalary)}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Максимальная</div>
          <div className="stat-value">{formatCurrency(maxSalary)}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Минимальная</div>
          <div className="stat-value">{formatCurrency(minSalary)}</div>
        </div>
      </div>

      <div className="positions-stats">
        <h3>Статистика по должностям</h3>
        <div className="positions-list">
          {stats.map((stat) => (
            <div key={stat.position} className="position-card">
              <div className="position-header">
                <h4>{stat.position}</h4>
                <span className="position-count">{stat.count} сотр.</span>
              </div>
              <div className="position-stats-grid">
                <div className="position-stat">
                  <span>Средняя</span>
                  <strong>{formatCurrency(stat.avgSalary)}</strong>
                </div>
                <div className="position-stat">
                  <span>Всего</span>
                  <strong>{formatCurrency(stat.totalSalary)}</strong>
                </div>
              </div>
              <div className="position-employees">
                {stat.employees.map(emp => (
                  <div key={emp.id} className="position-employee-item">
                    <span className="emp-name">{emp.name}</span>
                    <span className="emp-salary">{formatCurrency(emp.salary)}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
