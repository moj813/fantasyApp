import React from 'react';
import './Squad.css';

const Squad = () => {
  const playersTeam1 = [
    { name: 'Player 1', image: 'player1.jpg' },
    { name: 'Player 2', image: 'player2.jpg' },
    { name: 'Player 3', image: 'player3.jpg' },
    { name: 'Player 4', image: 'player4.jpg' },
    { name: 'Player 5', image: 'player5.jpg' },
    { name: 'Player 6', image: 'player6.jpg' },
    { name: 'Player 7', image: 'player7.jpg' },
    { name: 'Player 8', image: 'player8.jpg' },
    { name: 'Player 9', image: 'player9.jpg' },
    { name: 'Player 10', image: 'player10.jpg' },
    { name: 'Player 11', image: 'player11.jpg' }
  ];

  const playersTeam2 = [
    { name: 'Player A', image: 'playerA.jpg' },
    { name: 'Player B', image: 'playerB.jpg' },
    { name: 'Player C', image: 'playerC.jpg' },
    { name: 'Player D', image: 'playerD.jpg' },
    { name: 'Player E', image: 'playerE.jpg' },
    { name: 'Player F', image: 'playerF.jpg' },
    { name: 'Player G', image: 'playerG.jpg' },
    { name: 'Player H', image: 'playerH.jpg' },
    { name: 'Player I', image: 'playerI.jpg' },
    { name: 'Player J', image: 'playerJ.jpg' },
    { name: 'Player K', image: 'playerK.jpg' }
  ];

  return (
    <div className="squad-container">
      <div className="team-section">
        <h2>Team 1</h2>
        <div className="players-list">
          {playersTeam1.map((player, index) => (
            <div className="player" key={index}>
              <img src={player.image} alt={player.name} className="player-image" />
              {player.name}
            </div>
          ))}
        </div>
      </div>
      <div className="team-section">
        <h2>Team 2</h2>
        <div className="players-list">
          {playersTeam2.map((player, index) => (
            <div className="player" key={index}>
              <img src={player.image} alt={player.name} className="player-image" />
              {player.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Squad;
