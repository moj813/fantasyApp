import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Startbutton.css"; // Import the CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import { updateStage } from "../../../../services/operation/score";

const Startbutton = ({ match, isCountdownActive, setIsCountdownActive }) => {

  const dispatch = useDispatch();
  const targetTime = match.matchTime;

  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(targetTime)
  );

  useEffect(() => {

    const interval = setInterval(() => {
      const newRemainingTime = calculateRemainingTime(targetTime);
      setRemainingTime(newRemainingTime);

      if (newRemainingTime.total <= 0) {
        clearInterval(interval);
        setIsCountdownActive(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  const handleButtonClick = () => {
    if (!isCountdownActive) {
      dispatch(updateStage(match._id , 1));
    }
  };

  return (
    <div className="center">
      {remainingTime.total > 0 ? (
        <div className="center">
          <h1>
            {match.teamAName} VS {match.teamBName}
          </h1>
          <p>
            Time remaining: {remainingTime.days} days, {remainingTime.hours}{" "}
            hours, {remainingTime.minutes} minutes, {remainingTime.seconds}{" "}
            seconds
          </p>
          <NavLink to="/admin/mytournaments/Toss">
            <button
              disabled={isCountdownActive}
              className={`start-button ${isCountdownActive && "disabledBtn"}`}
            >
              <span className="icon">&#9654;</span> Start
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="center">
          <h1>
            {match.teamAName} VS {match.teamBName}
          </h1>
          <h1>You Can Start Scoring Now</h1>

          <button onClick={handleButtonClick} className="start-button">
            <span className="icon">&#9654;</span> Start
          </button>
        </div>
      )}
    </div>
  );
};

export default Startbutton;

const calculateRemainingTime = (endTime) => {
  const targetTimeUTC = new Date(endTime).getTime();
  const targetTimeLocal =
    targetTimeUTC + new Date().getTimezoneOffset() * 60 * 1000;
  const now = new Date().getTime();
  const difference = targetTimeLocal - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    total: difference,
    days,
    hours,
    minutes,
    seconds,
  };
};
