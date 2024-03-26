import React, { useState } from "react";

import "./Selectbat.css";


const Selectbowl = ({ score, updateOver, setView, bowlingPlayer }) => {

  const [selectedPlayer, setSelectedPlayer] = useState(null);


  const handlePlayerSelection = (playerID) => {
    setSelectedPlayer(playerID);
  };
  const player = Object.keys(bowlingPlayer).filter((item) => item !== score.currentBowlerID);

  const submitHandler = () => {
    //Emit the event here
    updateOver(selectedPlayer);
    setView(0);
  };

  return (
    <div className="atBatsman-outer-box">
      <div className="atBatsman-inside-box">
        <p>Select Bowler</p>
        <div className="atBatsman-card-row">
          {player.map((playerID) => (
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
        onClick={submitHandler}
      >
        Done
      </button>
    </div>
  );
};

export default Selectbowl;
