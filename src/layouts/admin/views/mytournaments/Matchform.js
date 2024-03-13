import React, { useState } from 'react';
import './Matchfrom.css'
import { NavLink } from 'react-router-dom';

const Matchform = () => {
  const [formData, setFormData] = useState({
    noOfOvers: '',
    oversPerBowler: '',
    city: '',
    ground: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackClick = () => {
    // Handle back button click logic
    console.log('Back button clicked');
  };

  const handleScheduleMatchClick = () => {
    // Handle Schedule Match button click logic
    console.log('Schedule Match button clicked');
    console.log('Form Data:', formData);
    // You can send the form data to the server or perform any other necessary actions here
  };

  return (
    <div className="match-schedule-form">
      <h2>Schedule Match</h2>
      <form>
        <label>
          No of Overs:
          <input type="text" name="noOfOvers" value={formData.noOfOvers} onChange={handleChange} />
        </label>

        <label>
          Overs per Bowler:
          <input type="text" name="oversPerBowler" value={formData.oversPerBowler} onChange={handleChange} />
        </label>

        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} />
        </label>

        <label>
          Ground:
          <input type="text" name="ground" value={formData.ground} onChange={handleChange} />
        </label>
        
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
        </label>
        
        <label>
          Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </label>
        

        <div className="button-container">
            <NavLink to={"/admin/mytournaments/Choose"}>
            <button className="back" type="button" onClick={handleBackClick}>Back</button>
            </NavLink>
          
          <NavLink to={"/admin/mytournaments/Schedulematch"}>
          <button className="schedule" type="button" onClick={handleScheduleMatchClick}>Schedule Match</button>
          </NavLink>
          
        </div>
      </form>
    </div>
  );
};

export default Matchform;
