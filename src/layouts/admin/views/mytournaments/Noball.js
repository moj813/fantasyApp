import React from 'react';
import './Noball.css'; // Import your CSS file
import { NavLink } from 'react-router-dom';

const Noball = () => {
  return (
    <div className="outer-box_18">
      <h1>NB + ___ runs</h1>
      <br></br>
      <input type='checkbox' id='checkbox' className='cbox'/>
      <label for="checkbox" className='label'>Not from the bat</label>
      <br></br>
      <br></br>
      <input type='checkbox' id='checkbox' className='cbox'/>
      <label for="checkbox" className='label'>Is boundary?</label>
      <NavLink to="/admin/mytournaments/Score"><button className='done'>Done</button></NavLink>
    </div>
  );
};

export default Noball;
