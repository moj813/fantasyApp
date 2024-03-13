// TeamBox.js

import React, { useState } from 'react';
import './Choose.css';
import { NavLink } from 'react-router-dom';

const Choose = () => {
  const [firstTeamDropdown, setFirstTeamDropdown] = useState(false);
  const [secondTeamDropdown, setSecondTeamDropdown] = useState(false);

  const toggleFirstTeamDropdown = () => {
    setFirstTeamDropdown(!firstTeamDropdown);
    setSecondTeamDropdown(false);
  };

  const toggleSecondTeamDropdown = () => {
    setSecondTeamDropdown(!secondTeamDropdown);
    setFirstTeamDropdown(false);
  };

  return (
    <div className="team-box">
      <div className="team" onClick={toggleFirstTeamDropdown}>
        Team A
        {firstTeamDropdown && (
          <div className="dropdown">
            <p>Option 1</p>
            <p>Option 2</p>
            <p>Option 3</p>
            {/* Add more options as needed */}
          </div>
        )}
      </div>
      <p>VS</p>
      <div className="team" onClick={toggleSecondTeamDropdown}>
        Team B
        {secondTeamDropdown && (
          <div className="dropdown">
            <p>Option A</p>
            <p>Option B</p>
            <p>Option C</p>
            {/* Add more options as needed */}
          </div>
        )}
      </div>
      <div className="buttons">
        <NavLink to="/admin/mytournaments/Schedulematch">
        <button className="back-button">Back</button>
        </NavLink>
        
        <NavLink to="/admin/mytournaments/Matchform">
        <button className="next-button">Next</button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Choose;
