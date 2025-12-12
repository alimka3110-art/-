import React, { useState } from 'react';

export default function AddEmployee({ onAdd }) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position && salary) {
      onAdd({ name, position, salary: Number(salary) });
      setName('');
      setPosition('');
      setSalary('');
    }
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <input className="input" type="text" placeholder="Имя" value={name} onChange={e => setName(e.target.value)} required/>
      <input className="input" type="text" placeholder="Должность" value={position} onChange={e => setPosition(e.target.value)} required/>
      <input className="input" type="number" placeholder="Зарплата" value={salary} onChange={e => setSalary(e.target.value)} required/>
      <button className="btn primary" type="submit">Добавить</button>
    </form>
  );
}
