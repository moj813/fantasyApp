// Addplayer.js

import React, { useState } from 'react';
import './Addpalyer.css';
import { NavLink } from 'react-router-dom';

const Addplayer = ({ onAddTeam }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const handleChange = (e) => {
    // Check if the input is the phone number and if its length is greater than 10
    if (e.target.name === 'number' && e.target.value.length > 10) {
      // You can choose to display an error message or take appropriate action
      console.log('Phone number cannot be greater than 10 digits');
      return;
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTeam(formData);
    setFormData({ name: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="team-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">Valid Phone Number</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter valid phone number"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <NavLink to="/admin/mytournamnets/teams">Add Player</NavLink>
      </button>
    </form>
  );
};

export default Addplayer;
