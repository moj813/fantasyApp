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
  <div className="scoreCard-32">
     <div className="live-score-container_32">
      <NavLink to="/user/livescore/22DIT032" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/22DIT033" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>

    <div className="live-score-container_32">
      <NavLink to="/user/livescore/team-score" onClick={updateScore}>
        <span>First team</span> <span>vs</span> <span>Second team</span>
        <h2>Batting Team name</h2>
        <p>{score}</p>
        <h6>Tap for more info</h6>
      </NavLink>
    </div>
    
    
  </div>
  );
}

export default LiveScore;
