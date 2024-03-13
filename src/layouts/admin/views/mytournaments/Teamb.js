

import { NavLink } from 'react-router-dom';
import React, { useState } from "react";
import "./Teamb.css";

const PlayingSquad = () => {
  const [squad, setSquad] = useState([]);
  const [playerName, setPlayerName] = useState("");

  const addPlayer = () => {
    setSquad([...squad, playerName]);
    setPlayerName("");
  };

  const searchPlayers = () => {
    // Add your search logic here
  };

  return (
    <div className="contain_18">
      <div className="playing-squad">
      <h1>Playing Squad: Team B</h1>
      
      <div className="input-button-container">
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder="Add player"
        />
        <button onClick={addPlayer} className="add-button">
          Add
        </button>
        <button onClick={searchPlayers} className="search-button">
          Search
        </button>
      </div>
      <div className="scrollbar">
        <ul className="player-list">
          {squad.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>  
      <div className="Bottom_18">
          <NavLink to="/admin/mytournaments/Playingsquad">
          <span><button className="cancel_18 ">Back to Team A</button></span>
          </NavLink>
          <span><button className="Team_18">Done</button></span>
      </div>
    </div>
    </div>
  );
};

export default PlayingSquad;