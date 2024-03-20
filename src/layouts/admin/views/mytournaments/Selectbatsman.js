import React from 'react';
import './Caught.css';
import { NavLink } from 'react-router-dom';

const Caught = () => {
  return (
    <div className="outer-box">
      <h2 className='toos'>Team A</h2>
      <div className="inside-box">
        <p>Select Next Batsman</p>
        <div className="card-row">
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
          <div className="card">Player Name</div>
        </div>
      </div>
      <NavLink to="/admin/mytournaments/Strike">
      <button className="custom-button" >Done</button>
      </NavLink>
      
    </div>
  );
}

export default Caught;
