import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './LiveScore.css';

const LiveScore = () => {
  const [score, setScore] = useState('XXX/XX');

  const updateScore = () => {
    const updatedScore = 'YYY/YY';
    setScore(updatedScore);
  };

  return (
    <div className="live-score-container">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting or Bowling</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>
  );
}

export default LiveScore;
