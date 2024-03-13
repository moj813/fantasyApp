// Tournaments.js

import React from 'react';
import './Tournaments.css';

const Tournaments = ({ tournaments }) => {
  return (
    <div className="main-component">
      <h2>Tournaments</h2>
      <div className="tournament-list">
        {tournaments.map((tournament, index) => (
          <div className="cards" key={index}>
            <div className="card">
              <span>{tournament.tournamentName}</span>
              <h2>From {new Date(tournament.startDate).toLocaleDateString()} to {new Date(tournament.lastDate).toLocaleDateString()}</h2>
              <p>{tournament.cityName}</p>
              <h6>Tap to enroll</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tournaments;
