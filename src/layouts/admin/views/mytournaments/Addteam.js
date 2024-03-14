// TeamForm.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Addteam.css';
import { useNavigate } from 'react-router-dom';
import { addTeam } from '../../../../services/operation/tournament';

const Addteam = ({ onAddTeam }) => {

  const navigate = useNavigate();
  const {tournamentID} = useParams();


  const [formData, setFormData] = useState({
    teamName: '',
    cityName: '',
  });

  const { teamName, cityName } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeam(teamName,cityName,tournamentID);
    setFormData({ name: '', city: '' });
    navigate(`/admin/${tournamentID}/teams`);
  };

  return (
    <form onSubmit={handleSubmit} className="team-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="teamName"
          value={teamName}
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
          name="cityName"
          value={cityName}
          onChange={handleChange}
          className="form-control"
          placeholder="Enter city"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Team
      </button>
    </form>
  );
};

export default Addteam;
