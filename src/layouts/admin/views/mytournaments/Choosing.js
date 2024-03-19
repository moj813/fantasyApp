import React from 'react';
import './Choosing.css';
import { NavLink } from 'react-router-dom';

const Choosing = () => {
  return (
    <div className="outer-box">
      <div className="inside-box">
        <p>Batting - Team Name</p>
        <div className="card-row">
            <NavLink to="/admin/mytournaments/Selectbat">
            <div className="card">Select Player 1</div>
            </NavLink>
            
            <NavLink to="/admin/mytournaments/Selectbat">
            <div className="card">Select Player 2</div>
            </NavLink>
        </div>
        <p>Bowling - Team Name</p>
        <div className="card-row">
        <NavLink to="/admin/mytournaments/Selectbowl">
        <div className="card">select Player</div>
        </NavLink>
          
        </div>
      </div>
      <NavLink to="/admin/mytournaments/Score">
      <button className="custom-button" >Start Innings</button>
      </NavLink>
      
    </div>
  );
}

export default Choosing;
