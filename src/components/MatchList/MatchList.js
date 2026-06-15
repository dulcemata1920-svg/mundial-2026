import React, { useState } from 'react';
import './MatchList.css';

const MatchList = () => {
  const [selectedPhase, setSelectedPhase] = useState('grupos');

  const matches = {
    grupos: [
      {
        id: 1,
        team1: '🇦🇷 Argentina',
        team2: '🇵🇦 Panamá',
        date: '12 de junio',
        time: '14:00',
        status: 'Próximo'
      },
      {
        id: 2,
        team1: '🇲🇦 Marruecos',
        team2: '🇻🇦 Vietnam',
        date: '12 de junio',
        time: '17:00',
        status: 'Próximo'
      },
      {
        id: 3,
        team1: '🇫🇷 Francia',
        team2: '🇮🇹 Italia',
        date: '12 de junio',
        time: '20:00',
        status: 'Próximo'
      }
    ],
    octavos: [
      {
        id: 4,
        team1: '🇧🇷 Brasil',
        team2: '🇪🇸 España',
        date: '29 de junio',
        time: '16:00',
        status: 'Próximo'
      },
      {
        id: 5,
        team1: '🇩🇪 Alemania',
        team2: '🇬🇧 Inglaterra',
        date: '29 de junio',
        time: '20:00',
        status: 'Próximo'
      }
    ],
    cuartos: [
      {
        id: 6,
        team1: '🏆 Ganador 1',
        team2: '🏆 Ganador 2',
        date: '4 de julio',
        time: '16:00',
        status: 'Por definir'
      }
    ],
    semis: [
      {
        id: 7,
        team1: '🏆 Semifinal 1',
        team2: '🏆 Semifinal 2',
        date: '9 de julio',
        time: '20:00',
        status: 'Por definir'
      }
    ],
    final: [
      {
        id: 8,
        team1: '🏆 Finalista 1',
        team2: '🏆 Finalista 2',
        date: '13 de julio',
        time: '18:00',
        status: 'Por definir'
      }
    ]
  };

  return (
    <div className="match-list">
      <h2>Partidos del Mundial 2026</h2>

      <div className="phase-selector">
        <button 
          className={`phase-btn ${selectedPhase === 'grupos' ? 'active' : ''}`}
          onClick={() => setSelectedPhase('grupos')}
        >
          Grupos
        </button>
        <button 
          className={`phase-btn ${selectedPhase === 'octavos' ? 'active' : ''}`}
          onClick={() => setSelectedPhase('octavos')}
        >
          Octavos
        </button>
        <button 
          className={`phase-btn ${selectedPhase === 'cuartos' ? 'active' : ''}`}
          onClick={() => setSelectedPhase('cuartos')}
        >
          Cuartos
        </button>
        <button 
          className={`phase-btn ${selectedPhase === 'semis' ? 'active' : ''}`}
          onClick={() => setSelectedPhase('semis')}
        >
          Semis
        </button>
        <button 
          className={`phase-btn ${selectedPhase === 'final' ? 'active' : ''}`}
          onClick={() => setSelectedPhase('final')}
        >
          Final
        </button>
      </div>

      <div className="matches-container">
        {matches[selectedPhase].map(match => (
          <div key={match.id} className="match-card">
            <div className="match-header">
              <span className="phase-label">
                {selectedPhase === 'grupos' && 'Fase de Grupos'}
                {selectedPhase === 'octavos' && 'Octavos de Final'}
                {selectedPhase === 'cuartos' && 'Cuartos de Final'}
                {selectedPhase === 'semis' && 'Semifinal'}
                {selectedPhase === 'final' && 'Final'}
              </span>
              <span className={`status ${match.status === 'Próximo' ? 'next' : 'pending'}`}>
                {match.status}
              </span>
            </div>

            <div className="match-body">
              <div className="team team1">{match.team1}</div>
              <div className="vs">VS</div>
              <div className="team team2">{match.team2}</div>
            </div>

            <div className="match-footer">
              <span className="date">📅 {match.date}</span>
              <span className="time">🕐 {match.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchList;
