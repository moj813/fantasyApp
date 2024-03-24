// Commentry.jsx

import React from 'react';
import './Commentry.css';

const Commentry = ({score , match}) => {
  // Provided data
  const commentryData = [
    { playerName: 'Virat Kohli', runs: 72, balls: 48, sixes: 2, fours: 6 },
    { playerName: 'Rohit Sharma', runs: 45, balls: 30, sixes: 2, fours: 3 },
    // Add more player data as needed
  ];

  // Bowling data
  const bowlingData = [
    { playerName: 'Ravindra Jadeja', overs: 72, maden: 48, runs: 2, wickets: 6 },
    { playerName: 'Rohit Sharma', overs: 45, maden: 30, runs: 2, wickets: 3 },
    // Add more player data as needed
  ];

  // Calculate strike rate for each player
  const updatedCommentryData = commentryData.map((player) => ({
    ...player,
    strikeRate: ((player.runs / player.balls) * 100).toFixed(2), // Calculate strike rate and fix to 2 decimal places
  }));

  // Calculate economy for each bowler
  const updatedBowlingData = bowlingData.map((bowler) => ({
    ...bowler,
    economy: (bowler.runs / bowler.overs).toFixed(2), // Calculate economy and fix to 2 decimal places
  }));

  return (
    <div className="commentry-container">
      <div className="commentry-header">
        <h2>{score.currentBattingTeam.teamName} <span>{score.currentRun}/{score.currentWicket} <sapn className="runDisplayAtSCoreCard">({score.currentOver}.{score.currentBall}/{match.noOfOvers})</sapn></span></h2>
      </div>
      <div className="commentry-content">
        <table className="commentry-table">
          <thead>
            <tr>
              <th className="better-column">Better</th>
              <th>R</th>
              <th>B</th>
              <th>6</th>
              <th>4</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            {updatedCommentryData.map((player, index) => (
              <tr key={index}>
                <td>{player.playerName}</td>
                <td>{player.runs}</td>
                <td>{player.balls}</td>
                <td>{player.sixes}</td>
                <td>{player.fours}</td>
                <td>{player.strikeRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
              <br></br>
        <table className="commentry-table">
          <thead>
            <tr>
              <th className="better-column">Bowler</th>
              <th>O</th>
              <th>M</th>
              <th>R</th>
              <th>W</th>
              <th>Eco</th>
            </tr>
          </thead>
          <tbody>
            {updatedBowlingData.map((bowler, index) => (
              <tr key={index}>
                <td>{bowler.playerName}</td>
                <td>{bowler.overs}</td>
                <td>{bowler.maden}</td>
                <td>{bowler.runs}</td>
                <td>{bowler.wickets}</td>
                <td>{bowler.economy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Commentry;
