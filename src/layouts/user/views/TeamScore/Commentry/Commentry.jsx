import React from 'react';
import './Commentry.css';

const Commentry = () => {
  // Provided data
  const commentryData = [
    { playerName: 'Virat Kohli', runs: 72, balls: 48, sixes: 2, fours: 6, strikeRate: "150.00" },
    { playerName: 'Rohit Sharma', runs: 45, balls: 30, sixes: 2, fours: 3, strikeRate: "150.00" },
    // Add more player data as needed
  ];

  // Calculate total runs and total balls
  const totalRuns = commentryData.reduce((total, player) => total + player.runs, 0);
  const totalBalls = commentryData.reduce((total, player) => total + player.balls, 0);

  return (
    <div className="commentry-container">
      <div className="commentry-header">
        <h2>Batting Team XXX/XX (over)</h2>
      </div>
      <div className="commentry-content">
        <table className="commentry-table">
          <thead>
            <tr>
              <th className="better-column">Better</th>
              <th>Runs</th>
              <th>B</th>
              <th>6's</th>
              <th>4's</th>
              <th>SR</th>
            </tr>
          </thead>
          <tbody>
            {commentryData.map((player, index) => (
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
          <tfoot>
            <tr>
              <td colSpan="1"><strong>PartnerShip</strong></td>
              <td>{totalRuns}</td>
              <td>{totalBalls}</td>
              <td colSpan="3"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Commentry;
