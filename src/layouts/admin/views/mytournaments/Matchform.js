import React, { useState } from "react";
import "./Matchfrom.css";
import { NavLink, useNavigate , useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { registerMatch } from "../../../../services/operation/tournament";

const Matchform = () => {

  const navigate = useNavigate();
  const {tournamentID} = useParams();
  const{teamA , teamB} = useSelector((state)=>state.match);

  const [formData, setFormData] = useState({
    noOfOvers: "",
    oversPerBowler: "",
    city: "",
    ground: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBackClick = () => {
    navigate(-1);
  };


  const onSubmit = (e) => {
    e.preventDefault();

    const currentTime = new Date();
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const allowedTime = new Date(currentTime.getTime() + 30 * 60000); // 30 minutes in milliseconds

    if (selectedDateTime < allowedTime) {
      toast.error("Select Time After 30 Minutes");
    } else {
      const { noOfOvers, oversPerBowler, city, ground,date,time  } = formData;
      const serializedDateTime = selectedDateTime.toISOString();
      console.log(teamA._id,teamB._id,teamA.teamName,teamB.teamName,noOfOvers, oversPerBowler, city, ground,serializedDateTime,tournamentID)
      registerMatch(teamA._id,teamB._id,teamA.teamName,teamB.teamName,noOfOvers, oversPerBowler, city, ground,date,time,tournamentID);
    }
  };


  return (
    <div className="match-schedule-form">
      <h2>Schedule Match</h2>
      <form onSubmit={(e)=>onSubmit(e)} className="formContainerAtAddTournament_22">
        <div>
          <div className="inputFieldAtSignup_22">
            <p>No of Overs : *</p>
            <input
              type="number"
              required
              name="noOfOvers"
              id="name"
              placeholder="Number Of overs"
              value={formData.noOfOvers}
              onChange={handleChange}
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>Overs per Bowler : *</p>
            <input
              type="number"
              required
              name="oversPerBowler"
              id="name"
              placeholder="Overs per Bowler"
              value={formData.oversPerBowler}
              onChange={handleChange}
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>City : *</p>
            <input
              type="text"
              required
              name="city"
              id="city"
              placeholder="Overs per Bowler"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <div className="inputFieldAtSignup_22">
            <p>Ground : *</p>
            <input
              type="text"
              required
              name="ground"
              placeholder="Ground"
              value={formData.ground}
              onChange={handleChange}
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>Date : *</p>
            <input
              type="date"
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>Date : *</p>
            <input
              type="time"
              required
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="button-container">
          <NavLink to={"/admin/mytournaments/Choose"}>
            <button className="back" type="button" onClick={handleBackClick}>
              Back
            </button>
          </NavLink>

          <button className="schedule" type="submit">
            Schedule Match
          </button>
        </div>
      </form>
    </div>
  );
};

export default Matchform;
