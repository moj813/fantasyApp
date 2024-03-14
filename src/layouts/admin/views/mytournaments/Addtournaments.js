import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { addtournament } from "../../../../services/operation/tournament";
import "./Addtournaments.css";

const Addtournaments = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //function For Validate Date
  const validateDates = (startDate, lastDate) => {
    const today = new Date();
    if (new Date(startDate) <= today) {
      setError(true);
      toast.error("Start Date must Grater than Today");
      return;
    } else if (new Date(lastDate) < new Date(startDate)) {
      setError(true);
      toast.error("Last date must be greater than or equal to start date");
      return;
    } else {
      setError(false);
    }
  };

  //function Handling Live Event
  const handleStartDateChange = () => {
    const startDate = document.getElementById("sdate").value;
    const lastDate = document.getElementById("ldate").value;
    validateDates(startDate, lastDate);
  };

  //function Handling Live Event
  const handleLastDateChange = () => {
    const startDate = document.getElementById("sdate").value;
    const lastDate = document.getElementById("ldate").value;
    validateDates(startDate, lastDate);
  };

  //function for Extract all Details
  const getDetails = () => {
    const tournamentName = document.getElementById("name").value;
    const cityName = document.getElementById("city").value;
    const mobileNumber = document.getElementById("number").value;
    const organiserName = document.getElementById("oraganizerName").value;
    const startDate = document.getElementById("sdate").value;
    const lastDate = document.getElementById("ldate").value;

    const data = {
      tournamentName,
      cityName,
      mobileNumber,
      organiserName,
      startDate,
      lastDate,
    };
    // console.log(data);
    dispatch(addtournament(data, navigate));
  };

  //function to handle Submit event
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (error) {
      toast.error("Can't Submit Change the Event date");
    }
    getDetails();
  };

  return (
    <div className="box_18Atadd">
      <form
        onSubmit={handleOnSubmit}
        className="formContainerAtAddTournament_22"
      >
        <div>
          <div className="inputFieldAtSignup_22">
            <p>Tournament Name : *</p>
            <input
              type="text"
              required
              name="name"
              id="name"
              placeholder="Name Of Tournament"
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>City : *</p>
            <input
              type="text"
              name="City"
              id="city"
              placeholder="City"
              required
            />
          </div>

          <div className="inputFieldAtSignup_22">
            <p>Monile Number : *</p>
            <input
              type="number"
              name="code"
              placeholder="0000000000"
              id="number"
              required
            />
          </div>
        </div>

        <div>
        <div className='inputFieldAtSignup_22'>
            <p>Organiser Name : *</p>
            <input 
                type="input"
                name="code"
                id="oraganizerName"
                placeholder="John Doe"
                required
            />
          </div>

          <div className='inputFieldAtSignup_22'>
            <p>Start Date : *</p>
            <input 
                 type="date"
                 name="sdate"
                 id="sdate"
                 required
                 onChange={handleStartDateChange}
            />
          </div>

          <div className='inputFieldAtSignup_22'>
            <p>End Date : *</p>
            <input 
                 type="date"
                 name="sdate"
                 id="ldate"
                 required
                 onChange={handleLastDateChange}
            />
          </div>

        </div>


        <div className="btnContainerAtAddTournament">
        <div className="sb">
            <button
              type="submit"
              className={`${error ? "disable submit" : "submit"}`}
            >
              Submit
            </button>
          </div></div>
      </form>
    </div>
  );
};

export default Addtournaments;
