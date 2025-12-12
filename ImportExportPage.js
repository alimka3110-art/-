import React, { useState, useRef } from 'react';

export default function ImportExportPage({ employees, onImport }) {
  const [importMessage, setImportMessage] = useState('');
  const fileInputRef = useRef(null);

  // Экспорт в JSON
  const handleExport = () => {
    const dataStr = JSON.stringify(employees, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `employees_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    setImportMessage('✅ Файл скачан успешно!');
    setTimeout(() => setImportMessage(''), 3000);
  };

  // Импорт из JSON
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result);
        if (Array.isArray(data) && data.every(item => item.name && item.position && item.salary)) {
          onImport(data);
          setImportMessage('✅ Файл загружен успешно! ' + data.length + ' сотрудников.');
          setTimeout(() => setImportMessage(''), 3000);
        } else {
          setImportMessage('❌ Неверный формат файла. Ожидается массив сотрудников.');
        }
      } catch (err) {
        setImportMessage('❌ Ошибка при чтении файла. Убедитесь, что это JSON.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Экспорт в CSV
  const handleExportCSV = () => {
    const headers = ['Имя', 'Должность', 'Зарплата (₸)'];
    const rows = employees.map(emp => [emp.name, emp.position, emp.salary]);
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    const dataBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `employees_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    setImportMessage('✅ CSV файл скачан успешно!');
    setTimeout(() => setImportMessage(''), 3000);
  };

  return (
    <section className="import-export-page">
      <h2>Импорт / Экспорт данных</h2>
      <p className="page-desc">Сохраняйте и загружайте данные сотрудников в удобных форматах</p>
      
      <div className="import-export-actions">
        <div className="action-card">
          <h3>📥 Импорт JSON</h3>
          <p>Загрузите JSON файл с сотрудниками</p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImport}
            style={{display: 'none'}}
          />
          <button className="btn primary" onClick={() => fileInputRef.current?.click()}>
            Выбрать файл
          </button>
        </div>

        <div className="action-card">
          <h3>📤 Экспорт JSON</h3>
          <p>Скачайте сотрудников в формате JSON</p>
          <button className="btn primary" onClick={handleExport}>
            Скачать JSON
          </button>
        </div>

        <div className="action-card">
          <h3>📊 Экспорт CSV</h3>
          <p>Скачайте сотрудников в формате CSV (Excel)</p>
          <button className="btn primary" onClick={handleExportCSV}>
            Скачать CSV
          </button>
        </div>

        <div className="action-card">
          <h3>🗑️ Очистить данные</h3>
          <p>Удалить всех сотрудников (можно восстановить из файла)</p>
          <button className="btn danger" onClick={() => {
            if (window.confirm('Вы уверены? Это удалит всех сотрудников.')) {
              onImport([]);
              setImportMessage('✅ Все данные очищены');
              setTimeout(() => setImportMessage(''), 3000);
            }
          }}>
            Очистить
          </button>
        </div>
      </div>

      {importMessage && <div className="import-message">{importMessage}</div>}
    </section>
  );
}
