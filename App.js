import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import EmployeesPage from './pages/EmployeesPage';
import AddEmployeePage from './pages/AddEmployeePage';
import EditEmployeePage from './pages/EditEmployeePage';
import StatisticsPage from './pages/StatisticsPage';
import ImportExportPage from './pages/ImportExportPage';
import ResumesPage from './pages/ResumesPage';

function App() {
  const [employees, setEmployees] = useState(() => {
    try {
      const saved = localStorage.getItem('employees');
      return saved ? JSON.parse(saved) : [
        { id: 1, name: 'John Doe', position: 'Менеджер', salary: 5000 },
        { id: 2, name: 'Jane Smith', position: 'Разработчик', salary: 6000 },
        { id: 3, name: 'Alex Johnson', position: 'Дизайнер', salary: 4500 },
      ];
    } catch (e) {
      return [
        { id: 1, name: 'John Doe', position: 'Менеджер', salary: 5000 },
        { id: 2, name: 'Jane Smith', position: 'Разработчик', salary: 6000 },
        { id: 3, name: 'Alex Johnson', position: 'Дизайнер', salary: 4500 },
      ];
    }
  });

  const addEmployee = (emp) => {
    const newEmp = { ...emp, id: Date.now() };
    setEmployees(prev => [...prev, newEmp]);
  };

  const deleteEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const updateEmployee = (updated) => {
    setEmployees(prev => prev.map(emp => emp.id === updated.id ? { ...emp, ...updated } : emp));
  };

  const importEmployees = (data) => {
    if (!Array.isArray(data) || data.length === 0) {
      setEmployees([]);
    } else {
      const withIds = data.map(emp => ({ ...emp, id: emp.id || Date.now() + Math.random() }));
      setEmployees(withIds);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('employees', JSON.stringify(employees));
    } catch (e) {
      // ignore
    }
  }, [employees]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<EmployeesPage employees={employees} onDelete={deleteEmployee} onEdit={id => window.location.href = `/edit/${id}`}/>} />
          <Route path="/add" element={<AddEmployeePage onAdd={addEmployee} />} />
          <Route path="/edit/:id" element={<EditEmployeePage employees={employees} onUpdate={updateEmployee} />} />
          <Route path="/statistics" element={<StatisticsPage employees={employees} />} />
          <Route path="/resumes" element={<ResumesPage employees={employees} />} />
          <Route path="/import-export" element={<ImportExportPage employees={employees} onImport={importEmployees} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
