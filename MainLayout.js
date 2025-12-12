import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';
import '../styles/employee.css';

export default function MainLayout() {
  return (
    <div className="main-layout">
      <header className="main-header">
        <div className="container">
          <h1 className="logo">HR Portal</h1>
          <nav>
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/employees" className="nav-link">Сотрудники</Link>
            <Link to="/resumes" className="nav-link">Резюме</Link>
            <Link to="/statistics" className="nav-link">Статистика</Link>
            <Link to="/import-export" className="nav-link">Файлы</Link>
            <Link to="/add" className="nav-link nav-add">Добавить</Link>
          </nav>
        </div>
      </header>
      <main className="main-content container">
        <Outlet />
      </main>
      <footer className="main-footer container">&copy; {new Date().getFullYear()} HR Portal</footer>
    </div>
  );
}
