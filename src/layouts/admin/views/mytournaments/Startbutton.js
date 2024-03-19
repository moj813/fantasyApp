import React from 'react';
import { NavLink } from 'react-router-dom';
import './Startbutton.css'; // Import the CSS file for styling

const Startbutton = () => {
  return (
    <div className="center">
        
         <h1>Match Name</h1>
         <NavLink to="/admin/mytournaments/Toss">
            <button className="start-button">
            <span className="icon">&#9654;</span> Start
            </button>
         </NavLink>
        
    </div>
  );
}

export default Startbutton;
