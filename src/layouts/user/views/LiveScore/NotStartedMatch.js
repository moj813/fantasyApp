import React from 'react'
import { NavLink } from 'react-router-dom'

const NotStartedMatch = ({tournamentID ,item}) => {
  return (

         <div className="live-score-container_32">
                <h2>{item.teamAName} vs{" "}
                {item.teamBName}</h2>
                <span>{item.city}</span>
                <span> at {item.ground}</span>
                <p>On : {item.matchTime.split('T')[0]} At : {item.matchTime.split('T')[1].split(":")[0]} : {item.matchTime.split('T')[1].split(":")[0]}</p>
                <h6>Upcoming</h6>
            </div>
   
  )
}

export default NotStartedMatch