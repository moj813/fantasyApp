import React, { useState } from 'react';
import './Selectbat.css';
import { NavLink } from 'react-router-dom';

const Selectbowl = ({ setView, score, bowlingPlayer}) => {

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelection = (playerID) => {
    setSelectedPlayer(playerID);
  };

  return (
    <div className="atBatsman-outer-box">
      <div className="atBatsman-inside-box">
        <p>Select the batsman</p>
        <div className="atBatsman-card-row">
          {Object.keys(bowlingPlayer).map((playerID) => (
            <div
              className={`atBatsman-card ${
                selectedPlayer === playerID ? "atBatsman-selected" : ""
              }`}
              onClick={() => handlePlayerSelection(playerID)}
            >
              {bowlingPlayer[playerID].playerName}
            </div>
          ))}
        </div>
      </div>

      <button
        className="atBatsman-custom-button"
        disabled={!selectedPlayer}
        onClick={() => setView(false)}
      >
        Done
      </button>
    </div>
  );
}

export default Selectbowl;




