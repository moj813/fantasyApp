import React from 'react';
import './Toss.css';
import { NavLink } from 'react-router-dom';

const Toss = () => {
  return (
    <div className="outer-box">
      <h2 className='toos'>TOSS</h2>
      <div className="inside-box">
        <p>Who won the toss?</p>
        <div className="card-row">
          <div className="card">Team A</div>
          <div className="card">Team B</div>
        </div>
        <p>Winner of the toss elected to?</p>
        <div className="card-row">
          <div className="card">Bat</div>
          <div className="card">Bowl</div>
        </div>
      </div>
      <NavLink to="/admin/mytournaments/Choosing">
      <button className="custom-button" >Let's Play</button>
      </NavLink>
      
    </div>
  );
}

export default Toss;
