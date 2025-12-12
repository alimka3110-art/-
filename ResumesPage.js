import React, { useState, useEffect } from 'react';
import '../styles/resumes.css';

const generateResume = (employee) => {
  const positionDescriptions = {
    'Менеджер': 'проактивный и результатно ориентированный менеджер с опытом управления проектами и командами',
    'Разработчик': 'опытный разработчик, специализирующийся на создании надёжных и масштабируемых решений',
    'Дизайнер': 'креативный дизайнер с фокусом на UX/UI и создание интуитивных интерфейсов',
    'QA-инженер': 'внимательный QA-инженер, обеспечивающий качество продукта и полноту тестирования',
    'Аналитик': 'системный аналитик, работающий на основе данных и выявляющий важные закономерности',
    'HR-специалист': 'опытный HR-специалист, ориентированный на подбор, адаптацию и развитие персонала',
    'Продакт-менеджер': 'стратегический продукт-менеджер, работающий на создание ценности для пользователей',
    'Маркетолог': 'творческий маркетолог с глубоким пониманием аудитории и данных',
  };

  const skillsByPosition = {
    'Менеджер': 'Управление проектами, планирование, лидерство, коммуникация, стратегическое мышление',
    'Разработчик': 'Кодирование, архитектура приложений, тестирование, CI/CD, отладка',
    'Дизайнер': 'UI/UX дизайн, прототипирование, Figma, адаптивный дизайн, работа с компонентами',
    'QA-инженер': 'Автоматизированное тестирование, тест-кейсы, багрепортинг, регрессионное тестирование',
    'Аналитик': 'Анализ данных, визуализация, SQL, Excel, создание отчётов, исследования',
    'HR-специалист': 'Подбор персонала, адаптация, интервьюирование, оценка компетенций',
    'Продакт-менеджер': 'Стратегия продукта, работа с пользователями, приоритизация, аналитика',
    'Маркетолог': 'Цифровой маркетинг, SMM, аналитика, создание контента, реклама',
  };

  const description = positionDescriptions[employee.position] || 'профессионал с опытом в своей сфере';
  const skills = skillsByPosition[employee.position] || 'профессиональные компетенции';

  return `ФИО: ${employee.name}
Должность: ${employee.position}
${employee.age ? `Возраст: ${employee.age}` : ''}
${employee.salary ? `Заработная плата: ₸${new Intl.NumberFormat('kk-KZ').format(employee.salary)}` : ''}

Краткое описание:
${description}. Проактивно подходит к решению задач, внимателен к деталям и открыт к обучению и развитию.

Опыт и профессиональные достижения:
- Успешно реализовал(-а) множество проектов и инициатив в своей области.
- Работал(-а) в кросс-функциональных командах и эффективно сотрудничал(-а) с коллегами.
- Постоянно повышал(-а) свои профессиональные навыки и компетенции.

Ключевые навыки:
${skills}

Образование:
Профильное или смежное образование, постоянное саморазвитие и прохождение профессиональных курсов.

Контакт/Примечание:
Открыт(-а) к новым вызовам и возможностям профессионального роста.`;
};

export default function ResumesPage({ employees = [] }) {
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    if (employees.length > 0 && !selectedResume) {
      setSelectedResume(employees[0]);
    }
  }, [employees]);

  return (
    <div className="resumes-page">
      <div className="resumes-container">
        <h1>Резюме сотрудников</h1>
        
        {employees.length === 0 ? (
          <div className="no-employees">
            <p>Нет сотрудников в базе. Добавьте сотрудников, чтобы просмотреть их резюме.</p>
          </div>
        ) : (
          <div className="resumes-layout">
            {/* Левая панель - список сотрудников */}
            <div className="resumes-sidebar">
              <h2>Команда</h2>
              <ul className="resumes-list">
                {employees.map(emp => (
                  <li key={emp.id} className={selectedResume?.id === emp.id ? 'active' : ''}>
                    <button 
                      onClick={() => setSelectedResume(emp)}
                      className="resume-list-item"
                    >
                      <div className="resume-name">{emp.name}</div>
                      <div className="resume-position">{emp.position}</div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Правая панель - содержимое резюме */}
            <div className="resumes-content">
              {selectedResume ? (
                <div className="resume-card">
                  <div className="resume-header">
                    <h2>{selectedResume.name}</h2>
                    <p className="resume-position-badge">{selectedResume.position}</p>
                  </div>
                  
                  <div className="resume-body">
                    <div className="resume-text">
                      {generateResume(selectedResume).split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="resume-actions">
                    <button className="btn-print" onClick={() => window.print()}>
                      Печать / Сохранить как PDF
                    </button>
                  </div>
                </div>
              ) : (
                <div className="no-resume">Выберите сотрудника</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
