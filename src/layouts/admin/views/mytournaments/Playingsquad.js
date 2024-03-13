import React, { useState } from "react";
import "./Playingsquad.css";
import { NavLink } from 'react-router-dom';

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
    <div className="playing-squad">
      <h1>Playing Squad: Team A</h1>
      <ul className="player-list">
        {squad.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
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
        <span><button className="cancel_18 ">Cancel</button></span>

        <NavLink to="/admin/mytournaments/Teamb">
        <span><button className="Team_18">Team B</button></span>
        </NavLink>
      </div>
    </div>
  );
};

export default PlayingSquad;