import React from 'react'

const CompletedMatch = ({tournamentID ,item}) => {
  return (
    <div className="live-score-container_32">
                <h2>{item.teamAName} vs{" "}
                {item.teamBName}</h2>
                <span>{item.city}</span>
                <span> at {item.ground}</span>
                <p>{item.finalResult}</p>
                <h6>Completed</h6>
            </div>
  )
}

export default CompletedMatch