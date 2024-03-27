import React, { useState } from "react";
import "./Caught.css";
import { NavLink } from "react-router-dom";

const Caught = ({
  score,
  setView,
  battingPlayer,
  setStriker,
  striker,
  nonStriker,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerSelection = (playerID) => {
    setSelectedPlayer(playerID);
  };

  // Filter out the Current Striker , Currnet Non Striker and Alredy Out  player from the list of available players
  // const availablePlayers = Object.keys(score[score.currentBattingTeam.teamID]).filter(
  //   (playerID) =>score[score.currentBattingTeam.teamID][playerID].isOut !== true
  // );

  // playerID !== score.currentNonStrikerID &&
  // score[score.currentStrikerID] !== playerID &&


  const availablePlayers = Object.keys(score[score.currentBattingTeam.teamID]).filter((playerID) => {

    const shouldExclude = playerID === score.currentStrikerID || playerID === score.currentNonStrikerID || score[score.currentBattingTeam.teamID][playerID].isOut;

  // Return true only if all conditions are NOT met (player should NOT be excluded)
  return !shouldExclude;
  });



availablePlayers.map((playerID)=>console.log(battingPlayer[playerID].isOut))
  return (
    <div className="atBatsman-outer-box">
      <div className="atBatsman-inside-box">
        <p>Select Next Batsman</p>
        <div className="atBatsman-card-row">
          {/* Map over available players */}
          {availablePlayers.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            availablePlayers.map((playerID) => (
              <div
                className={`atBatsman-card ${
                  selectedPlayer === playerID ? "atBatsman-selected" : ""
                }`}
                onClick={() => handlePlayerSelection(playerID)}
              >
                {battingPlayer[playerID].playerName}
              </div>
            ))
          )}
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

export default Caught;
