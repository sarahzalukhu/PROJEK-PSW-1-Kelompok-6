import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Beranda from './components/Beranda';
import Materi from './components/Materi';
import Latihan from './components/Latihan';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/materi" element={<Materi />} />
        <Route path="/latihan" element={<Latihan />} />
      </Routes>
    </Router>
  );
}

export default App;