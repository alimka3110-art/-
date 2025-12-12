import React from 'react';

export default function Home() {
  return (
    <section className="home-page">
      <div className="home-content">
        <div className="home-hero">
          <h1 className="home-title">HR Portal</h1>
          <p className="home-subtitle">Управление сотрудниками на новом уровне</p>
          <p className="home-desc">Современное приложение для управления командой вашей компании. Быстро, удобно, красиво.</p>
          <div className="home-cta">
            <a href="/employees" className="btn primary">Перейти к сотрудникам</a>
            <a href="/add" className="btn secondary">Добавить сотрудника</a>
          </div>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3>Управление сотрудниками</h3>
            <p>Добавляйте, редактируйте и удаляйте сотрудников за несколько кликов</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box search">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <h3>Поиск и фильтрация</h3>
            <p>Мгновенный поиск по имени, должности и другим параметрам</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box sort">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="12 3 20 9 12 15"></polyline>
                <polyline points="12 9 20 15 12 21"></polyline>
              </svg>
            </div>
            <h3>Сортировка</h3>
            <p>Сортируйте по имени, должности, зарплате и другим критериям</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon-box save">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                <polyline points="17 21 17 13 7 13 7 21"></polyline>
                <polyline points="7 3 7 8 15 8"></polyline>
              </svg>
            </div>
            <h3>Безопасное сохранение</h3>
            <p>Все данные хранятся локально в браузере — полная приватность</p>
          </div>
        </div>
      </div>
    </section>
  );
}
