import React from 'react';
import './Strike.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';

function Strike() {
  return (
    <div className="outer-container_18_22_32">
    <h1 className='who'>Who is on Strike?</h1>
      <div className="inner-container_18_22_32">
        <div className="card_18_22_32">
          <h2>Player 1</h2>
        </div>
        <div className="card_18_22_32">
          <h2>Player 2</h2>
        </div>
      </div>
      <div className="button-container">
        <NavLink to="/admin/mytournaments/Selectbatsman">
        <button className="cancel-button">Cancel</button>
        </NavLink>

        <NavLink to="/admin/mytournaments/Score">
        <button className="ok-button">OK</button>
        </NavLink>
        
      </div>
    </div>
  );
}

export default Strike;
