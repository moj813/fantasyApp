import React from 'react';
import './Selectbowl.css';
import { NavLink } from 'react-router-dom';

const Selectbowl = () => {
  return (
    <div className="outer-box">
      <div className="inside-box">
        <p>Select the batsman</p>
        <div className="card-row">
          <div className="card">Player 1</div>
          <div className="card">Player 2</div>
          <div className="card">Player 3</div>
          <div className="card">Player 4</div>
        </div>
      </div>
      <NavLink to="/admin/mytournaments/Choosing">
      <button className="custom-button" >Done</button>
      </NavLink>
      
    </div>
  );
}

export default Selectbowl;
