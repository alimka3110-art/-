import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { POSITIONS } from '../constants';

export default function EditEmployeePage({ employees, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const empId = Number(id);

  const emp = employees.find(e => e.id === empId) || {};

  const [name, setName] = useState(emp.name || '');
  const [position, setPosition] = useState(emp.position || '');
  const [salary, setSalary] = useState(emp.salary || '');
  const [error, setError] = useState('');

  useEffect(() => {
    setName(emp.name || '');
    setPosition(emp.position || '');
    setSalary(emp.salary || '');
  }, [id, emp.name, emp.position, emp.salary]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !position.trim() || !salary || isNaN(Number(salary)) || Number(salary) <= 0) {
      setError('Пожалуйста, заполните все поля корректно.');
      return;
    }
    onUpdate({ id: empId, name: name.trim(), position: position.trim(), salary: Number(salary) });
    navigate('/employees');
  };

  if (!emp || !emp.id) return <p>Сотрудник не найден</p>;

  return (
    <section className="edit-employee-page">
      <h2>Редактировать сотрудника</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
        <select className="input" value={position} onChange={e => setPosition(e.target.value)}>
          <option value="">Выберите должность</option>
          {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <input className="input" type="number" placeholder="Зарплата (₸)" value={salary} onChange={e => setSalary(e.target.value)} />
        {error && <div className="form-error">{error}</div>}
        <button className="btn primary" type="submit">Сохранить</button>
      </form>
    </section>
  );
}
