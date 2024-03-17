import React from 'react';
import './TeamPlayers.css';

const TeamPlayers = () => {
  // Sample player data
  const playersTeam1 = Array.from({ length: 15 }, (_, index) => ({ name: `Player ${index + 1}` }));
  const playersTeam2 = Array.from({ length: 15 }, (_, index) => ({ name: `Player A${index + 1}` }));

  return (
    <div className="squad-container">
      <div className="team-section">
        <h2>Team 1</h2> 
        <div className="players-list">
          {playersTeam1.map((player, index) => (
            <div className="player" key={index}>
              <input type="checkbox" id={`player-${index}`} name={`player-${index}`} />
              <label htmlFor={`player-${index}`}>{player.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="team-section">
        <h2>Team 2</h2>
        <div className="players-list">
          {playersTeam2.map((player, index) => (
            <div className="player" key={index}>
              <input type="checkbox" id={`player-A${index}`} name={`player-A${index}`} />
              <label htmlFor={`player-A${index}`}>{player.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPlayers;
