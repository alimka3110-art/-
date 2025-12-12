import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1 style={{margin:0}}>Mini HR App</h1>
        <nav>
          <Link to="/" className="btn" style={{marginRight:8}}>Главная</Link>
          <Link to="/employees" className="btn" style={{marginRight:8}}>Сотрудники</Link>
          <Link to="/add" className="btn primary">Добавить</Link>
        </nav>
      </div>
    </header>
  );
}
