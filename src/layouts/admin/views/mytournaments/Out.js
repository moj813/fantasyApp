import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Out.css'; // Import your CSS file

const Out = () => {
  // Create an array of 15 elements for rendering the cards
  const cards = Array.from({ length: 15 }, (_, index) => index + 1);

  // Sample texts for each card
  const cardTexts = [
    "BOWLED",
    "CAUGHT",
    "CAUGHT BEHIND",
    "CAUGHT & BOWLED",
    "STUMPED",
    "RUN OUT",
    "LBW",
    "HIT WICKET",
    "HIT THE BOWL TWICE",
    "HANDLED THE BOWL",
    "OBSTR.THE FIELD",
    "TIMED OUT",
    "RETIRED HURT",
    "RETIRED OUT",
    "RETIRED"
  ];

  return (
    <div className="container_18_22">
      <div className="box_18_22">
        {cards.map((card, index) => (
          <div className="card_18_22" key={card}>
            {/* Render NavLink for the second card */}
            {index === 1 ? (
              <NavLink to="/admin/mytournaments/Caught">
                {cardTexts[index]}
              </NavLink>
            ) : (
              // Render regular text for other cards
              <NavLink to={`/admin/mytournaments/Selectbatsman`}>
              <span>{cardTexts[index]}</span>
              </NavLink>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Out;
