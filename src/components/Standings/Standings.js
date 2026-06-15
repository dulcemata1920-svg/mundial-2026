import React, { useState } from 'react';
import './Standings.css';

const Standings = () => {
  const [selectedGroup, setSelectedGroup] = useState('A');

  const standings = {
    A: [
      { pos: 1, team: '🇦🇷 Argentina', pj: 3, g: 3, e: 0, p: 0, gf: 9, gc: 1, dg: 8, pts: 9 },
      { pos: 2, team: '🇵🇦 Panamá', pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 5, dg: -1, pts: 4 },
      { pos: 3, team: '🇵🇪 Perú', pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 6, dg: -3, pts: 3 },
      { pos: 4, team: '🇪🇨 Ecuador', pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 6, dg: -4, pts: 1 }
    ],
    B: [
      { pos: 1, team: '🇫🇷 Francia', pj: 3, g: 3, e: 0, p: 0, gf: 8, gc: 0, dg: 8, pts: 9 },
      { pos: 2, team: '🇮🇹 Italia', pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 3, dg: 2, pts: 6 },
      { pos: 3, team: '🇳🇴 Noruega', pj: 3, g: 1, e: 1, p: 1, gf: 3, gc: 4, dg: -1, pts: 4 },
      { pos: 4, team: '🇪🇬 Egipto', pj: 3, g: 0, e: 1, p: 2, gf: 1, gc: 10, dg: -9, pts: 1 }
    ],
    C: [
      { pos: 1, team: '🇧🇷 Brasil', pj: 3, g: 3, e: 0, p: 0, gf: 10, gc: 1, dg: 9, pts: 9 },
      { pos: 2, team: '🇪🇸 España', pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 3, dg: 3, pts: 6 },
      { pos: 3, team: '🇲🇽 México', pj: 3, g: 1, e: 1, p: 1, gf: 4, gc: 5, dg: -1, pts: 4 },
      { pos: 4, team: '🇨🇷 Costa Rica', pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 13, dg: -11, pts: 1 }
    ]
  };

  return (
    <div className="standings">
      <h2>Tabla de Posiciones</h2>

      <div className="group-selector">
        {Object.keys(standings).map(group => (
          <button
            key={group}
            className={`group-btn ${selectedGroup === group ? 'active' : ''}`}
            onClick={() => setSelectedGroup(group)}
          >
            Grupo {group}
          </button>
        ))}
      </div>

      <div className="table-container">
        <table className="standings-table">
          <thead>
            <tr>
              <th>Pos</th>
              <th>Equipo</th>
              <th>PJ</th>
              <th>G</th>
              <th>E</th>
              <th>P</th>
              <th>GF</th>
              <th>GC</th>
              <th>DG</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {standings[selectedGroup].map((row, index) => (
              <tr key={index} className={`rank-${row.pos}`}>
                <td className="position">{row.pos}</td>
                <td className="team">{row.team}</td>
                <td>{row.pj}</td>
                <td>{row.g}</td>
                <td>{row.e}</td>
                <td>{row.p}</td>
                <td>{row.gf}</td>
                <td>{row.gc}</td>
                <td>{row.dg}</td>
                <td className="points">{row.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="legend">
        <p><strong>PJ:</strong> Partidos Jugados | <strong>G:</strong> Ganados | <strong>E:</strong> Empatados | <strong>P:</strong> Perdidos</p>
        <p><strong>GF:</strong> Goles a Favor | <strong>GC:</strong> Goles en Contra | <strong>DG:</strong> Diferencia de Goles | <strong>Pts:</strong> Puntos</p>
      </div>
    </div>
  );
};

export default Standings;
