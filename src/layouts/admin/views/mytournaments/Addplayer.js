// Addplayer.js

import React, { useState } from 'react';
import './Addpalyer.css';
import {  useNavigate , useParams} from 'react-router-dom';
import { addPlayer } from '../../../../services/operation/player';

const Addplayer = ({ onAddTeam }) => {

  const navigate = useNavigate();
  const {tournamentID , teamID} = useParams();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name,number);
    addPlayer(name, number,tournamentID , teamID);
    setFormData({ name: '', number: '' });
    navigate(-1);
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
          required
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
          required
          maxLength={10}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Player
      </button>
    </form>
  );
};

export default Addplayer;
