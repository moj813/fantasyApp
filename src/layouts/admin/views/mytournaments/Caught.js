import React from 'react';
import './Caught.css';
import { NavLink } from 'react-router-dom';

const Caught = () => {
  return (
    <div className="outer-box">
      <h2 className='toos'>CAUGHT</h2>
      <div className="inside-box">
        <p>Who?</p>
        <div className="card-row">
          <div className="card">Strike</div>
        </div>
        <p>Fielder</p>
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
      <NavLink to="/admin/mytournaments/Selectbatsman">
      <button className="custom-button" >OUT</button>
      </NavLink>
      
    </div>
  );
}

export default Caught;
