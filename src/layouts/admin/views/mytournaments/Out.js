import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import './Out.css'; // Import your CSS file

const Out = ({setView}) => {

  const callIT = ()=>{
    console.log("HEll")
  }

  const bowledHandler = ()=>{
    setView(6)
  }
  const caughtHandler = ()=>{
    setView(6)
  }
  const stumpedHandler = ()=>{
    setView(6)
  }
  const runOutHandler = ()=>{
    setView(6)
  }

  const lbwHandler = ()=>{
    setView(6)
  }
  const hitHandler = ()=>{
    setView(6)
  }

  // List and Function of Wicket Type
const cars=[
  {
    type:"BOWLED",
    fun:bowledHandler,
  },
  {
    type:"CAUGHT",
    fun:caughtHandler,
  },
  {
    type:"STUMPED",
    fun:stumpedHandler,
  },
  {
    type:"RUN OUT",
    fun:runOutHandler,
  },
  {
    type:"LBW",
    fun:lbwHandler,
  },
  {
    type:"HIT WICKET",
    fun:hitHandler,
  },
]
  return (
    // <div className="container_18_22">
      <div className="box_18_22">
        {cars.map((card, index) => (
          <div className="card_18_22" key={index} onClick={card.fun}>
              <NavLink to="/admin/mytournaments/Caught">
                {card.type}
              </NavLink>
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Out;
