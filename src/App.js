// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Schedule from './components/Schedule';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // If login successful, update state
  };

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<Dashboard />} />
            
          </Routes>
        ) : (
          <Login onLogin={handleLogin} /> 
        )}
      </div>
    </Router>
  );
}

export default App;
