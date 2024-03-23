import React, { useState } from "react";
import "./Selectbat.css";
import { NavLink } from "react-router-dom";

const Selectbat = ({ setView, battingPlayer, setStriker  , striker}) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelection = (playerID) => {
    setSelectedPlayer(playerID);
    setStriker(playerID)
  };

  // Filter out the selected player from the list of available players
  const availablePlayers = Object.keys(battingPlayer).filter(
    (playerID) => playerID !== striker
  );

  return (
    <div className="atBatsman-outer-box">
      <div className="atBatsman-inside-box">
        <p>Select the batsman</p>
        <div className="atBatsman-card-row">
          {/* Map over available players */}
          {availablePlayers.map((playerID) => (
            <div
              className={`atBatsman-card ${
                selectedPlayer === playerID ? "atBatsman-selected" : ""
              }`}
              onClick={() => handlePlayerSelection(playerID)}
            >
              {battingPlayer[playerID].playerName}
            </div>
          ))}
        </div>
      </div>

      <button
        className="atBatsman-custom-button"
        disabled={!selectedPlayer}
        onClick={() => {
          setStriker(selectedPlayer);
          setView(0);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Selectbat;
