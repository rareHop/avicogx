import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeSwitcher from './components/ThemeSwitcher';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Documentation from './pages/Documentation';
import Tutorials from './pages/Tutorials';
import BotDetails from './pages/BotDetails';
import './styles/minecraft-theme.css';
import './styles/custom-cursor.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen theme-transition">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/bot-details" element={<BotDetails />} />
        </Routes>
        <ThemeSwitcher />
      </div>
    </Router>
  );
}

export default App;