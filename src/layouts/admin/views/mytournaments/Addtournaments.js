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
    const mobileNumber = document.getElementById("mcode").value;
    const organiserName = document.getElementById("code").value;
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
    dispatch(addtournament(data , navigate));
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
      <form onSubmit={handleOnSubmit}>
        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            name="name"
            id="name"
            placeholder="Name Of Tournament"
            required
          />
          <label for="name" class="form__label">
            Tournament Name
          </label>
        </div>

        <div className="form__group field">
          <input
            type="input"
            class="form__field"
            name="City"
            id="city"
            placeholder="City"
            required
          />
          <label for="name" class="form__label">
            City
          </label>
        </div>

        <div class="sap">
          <div className="form__group field">
            <input
              type="number"
              class="form__fiel"
              name="code"
              placeholder="0000000000"
              id="mcode"
              required
            />
            <label for="name" class="form__label">
              Mobile No.
            </label>
          </div>

          <div className="form__group field">
            <input
              type="input"
              class="form__fiel"
              name="code"
              id="code"
              placeholder="John Doe"
              required
            />
            <label for="name" class="form__label">
              Organiser Name
            </label>
          </div>
        </div>

        <div className="form__group field">
          <input
            type="date"
            className="form__fiel"
            name="sdate"
            id="sdate"
            required
            onChange={handleStartDateChange}
          />
          <label for="name" className="form__label">
            Start Date
          </label>
        </div>

        <div className="form__group field">
          <input
            type="date"
            className="form__fiel"
            placeholder=""
            name="ldate"
            id="ldate"
            required
            onChange={handleLastDateChange}
          />
          <label for="name" className="form__label">
            Last Date
          </label>
        </div>

        <div className="sb">
          <button
            type="submit"
            className={`${error ? "disable submit" : "submit"}`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addtournaments;
