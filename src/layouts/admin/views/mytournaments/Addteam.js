// TeamForm.js

import React, { useState } from 'react';
import './Addteam.css';
import { NavLink } from 'react-router-dom';

const Addteam = ({ onAddTeam }) => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
  });

  const { name, city } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTeam(formData);
    setFormData({ name: '', city: '' });
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
          placeholder="Enter team name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter city"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <NavLink to="/admin/mytournamnets/teams">
        Add Team
        </NavLink>
        
      </button>
    </form>
  );
};

export default Addteam;
