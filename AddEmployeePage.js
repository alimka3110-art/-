import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { POSITIONS } from '../constants';

export default function AddEmployeePage({ onAdd }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name.trim() || !position.trim() || !salary || isNaN(Number(salary)) || Number(salary) <= 0) {
      setError('Пожалуйста, заполните все поля корректно.');
      return;
    }
    onAdd({ name: name.trim(), position: position.trim(), salary: Number(salary) });
    navigate('/employees');
  };

  return (
    <section className="add-employee-page">
      <h2>Добавить сотрудника</h2>
      <form className="employee-form" onSubmit={handleSubmit}>
        <input className="input" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} />
        <select className="input" value={position} onChange={e => setPosition(e.target.value)}>
          <option value="">Выберите должность</option>
          {POSITIONS.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        <input className="input" type="number" placeholder="Зарплата (₸)" value={salary} onChange={e => setSalary(e.target.value)} />
        {error && <div className="form-error">{error}</div>}
        <button className="btn primary" type="submit">Добавить</button>
      </form>
    </section>
  );
}
