import React, { useState } from 'react';
import './App.css';
import Countdown from './components/Countdown/Countdown';
import MatchList from './components/MatchList/MatchList';
import Standings from './components/Standings/Standings';

function App() {
  const [activeTab, setActiveTab] = useState('countdown');

  return (
    <div className="App">
      <header className="header">
        <h1>⚽ App Mundial 2026</h1>
        <p>Sigue cada momento del torneo</p>
      </header>

      <nav className="navbar">
        <button 
          className={`nav-btn ${activeTab === 'countdown' ? 'active' : ''}`}
          onClick={() => setActiveTab('countdown')}
        >
          📅 Cuenta Regresiva
        </button>
        <button 
          className={`nav-btn ${activeTab === 'matches' ? 'active' : ''}`}
          onClick={() => setActiveTab('matches')}
        >
          🎯 Partidos
        </button>
        <button 
          className={`nav-btn ${activeTab === 'standings' ? 'active' : ''}`}
          onClick={() => setActiveTab('standings')}
        >
          🏆 Posiciones
        </button>
      </nav>

      <main className="container">
        {activeTab === 'countdown' && <Countdown />}
        {activeTab === 'matches' && <MatchList />}
        {activeTab === 'standings' && <Standings />}
      </main>

      <footer className="footer">
        <p>© 2026 Mundial. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
