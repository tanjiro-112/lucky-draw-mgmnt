import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import Prizes from './pages/Prizes';
import Participants from './pages/Participants';
import Draws from './pages/Draws';
import Settings from './pages/Settings';
import './index.css';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.querySelector('html').setAttribute('data-theme', theme);
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-base-200">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/events" element={<Events />} />
              <Route path="/prizes" element={<Prizes />} />
              <Route path="/participants" element={<Participants />} />
              <Route path="/draws" element={<Draws />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
