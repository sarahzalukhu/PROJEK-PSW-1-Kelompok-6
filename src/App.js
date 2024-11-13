import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import GreetingsAndIntroduction from './components/semester1/Greetings_And_Introduction';
import RecountText from './components/semester1/Recount_Text';
import DescriptiveText from './components/semester1/Descriptive_Text';
import SimplePresentTense from './components/semester1/Simple_Present_Tense';
import InformalLetters from './components/semester1/Informal_Letters';
import Quiz1 from './components/semester1/Quiz1';
import NarativeText from './components/semester2/Narative_Text';
import ProceduralText from './components/semester2/Procedural_Text';
import ExpositionText from './components/semester2/Exposition_Text';
import PresentContinuousTense from './components/semester2/Present_Continuous_Tense';
import ReportText from './components/semester2/Report_Text';
import Quiz2 from './components/semester2/Quiz2';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/greetings&Introduction" element={<GreetingsAndIntroduction />} />
          <Route path="/recount text" element={<RecountText />} />
          <Route path="/descriptive text" element={<DescriptiveText />} />
          <Route path="/simple present tense" element={<SimplePresentTense />} />
          <Route path="/informal letters" element={<InformalLetters />} />
          <Route path="/quiz 1" element={<Quiz1 />} />
          <Route path="/narative text" element={<NarativeText />} />
          <Route path="/procedural text" element={<ProceduralText />} />
          <Route path="/exposition text" element={<ExpositionText />} />
          <Route path="/present continuous tense" element={<PresentContinuousTense />} />
          <Route path="/report text" element={<ReportText />} />
          <Route path="/quiz 2" element={<Quiz2 />} />
          <Route path="/" element={<Navigate to="/register" replace />} />
        </Routes>
    </Router>
  );
};

export default App;