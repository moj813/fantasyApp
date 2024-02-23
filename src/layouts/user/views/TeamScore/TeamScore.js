import React from 'react';
import './TeamScore.css';

const TeamScore = () => {
  return (
    <div className='scorecard_32'>
      <h3>
        First team vs Second team, n<sup>th</sup> Match - Live Cricket Score & Commentary
      </h3>
      <nav className="navigation-bar">
        <ul>
          <button>Commentary</button>
          <button>Score Card</button>
          <button>Squad</button>
        </ul>
      </nav>
      <br />
      <h1>Batting Team XXX/XX (over)</h1>
    </div>
  );
}

export default TeamScore;
