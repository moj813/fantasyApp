import React from 'react';
import './Scorecard.css';



// Sample player data
const samplePlayers = [
  { name: 'Player 1', runs: 60, balls: 30, fours: 5, sixes: 1 },
  { name: 'Player 2', runs: 30, balls: 20, fours: 3, sixes: 0 },
  { name: 'Player 3', runs: 20, balls: 15, fours: 1, sixes: 0 },
  { name: 'Player 4', runs: 10, balls: 20, fours: 3, sixes: 0 },
  { name: 'Player 5', runs: 234, balls: 115, fours: 15, sixes: 10 },
  // Add more player data as needed
];

const bowlerPlayers = [
  { name: 'Player 1', overs: 60, m: 30, runs: 500, w: 1 },
  { name: 'Player 2', overs: 50, m: 30, runs: 50, w: 1 },
  { name: 'Player 3', overs: 40, m: 20, runs: 175, w: 1 },
  { name: 'Player 4', overs: 30, m: 10, runs: 115, w: 1 },
  { name: 'Player 5', overs: 20, m: 0, runs: 200, w: 1 },
  // Add more player data as needed
];


// Calculate strike rate for each player
const updatedSamplePlayersData = samplePlayers.map(player => ({
  ...player,
  strikeRate: ((player.runs / player.balls) * 100).toFixed(2)
}));

const updatedBowlerPlayersData = bowlerPlayers.map((bowler) => ({
  ...bowler,
  economy: (bowler.runs / bowler.overs).toFixed(2), // Calculate economy and fix to 2 decimal places
}));
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
          {updatedSamplePlayersData && updatedSamplePlayersData.map((player, index) => (
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
      <br></br>
      <table className="player-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Overs</th>
            <th>Maden</th>
            <th>Runs</th>
            <th>Wickets</th>
            <th>Eco</th>
          </tr>
        </thead>
        <tbody>
          {updatedBowlerPlayersData && updatedBowlerPlayersData.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.overs}</td>
              <td>{player.m}</td>
              <td>{player.runs}</td>
              <td>{player.w}</td>
              <td>{player.economy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scorecard;
