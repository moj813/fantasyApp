import React from 'react';
import './Scorecard.css';

// Sample player data
const samplePlayers = [
  { name: 'Player 1', runs: 50, balls: 30, fours: 5, sixes: 1, strikeRate: '166.67' },
  { name: 'Player 2', runs: 30, balls: 20, fours: 3, sixes: 0, strikeRate: '150.00' },
  { name: 'Player 3', runs: 20, balls: 15, fours: 1, sixes: 0, strikeRate: '133.33' },
  // Add more player data as needed
];

// Define the ScoreCard component
const Scorecard = ({ teamName, players }) => {
  return (
    <div className="score-card">
      <h2 className="team-name">{teamName}</h2>
      <table className="player-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Runs</th>
            <th>Balls</th>
            <th>Fours</th>
            <th>Sixes</th>
            <th>Strike Rate</th>
          </tr>
        </thead>
        <tbody>
          {samplePlayers && samplePlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.runs}</td>
              <td>{player.balls}</td>
              <td>{player.fours}</td>
              <td>{player.sixes}</td>
              <td>{player.strikeRate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scorecard;
