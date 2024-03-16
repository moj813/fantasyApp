import React, { useState } from 'react';
import './TeamScore.css';
import Commentry from './Commentry/Commentry';
import Scorecard from './Scorecard/Scorecard';
import Squad from './Squad/Squad';
// import TeamPlayers from './TeamPlayers/TeamPlyers';


const TeamScore = () => {
  const [selectedButton, setSelectedButton] = useState('commentary'); // Default selected button is 'commentary'

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className='scorecard_32'>
      <h3>
        First team vs Second team, n<sup>th</sup> Match - Live Cricket Score & Commentary
      </h3>
      <nav className="navigation-bar_32">
        <button
          className={selectedButton === 'commentary' ? 'selected' : ''}
          onClick={() => handleButtonClick('commentary')}
        >
          Commentary
        </button>
        <button
          className={selectedButton === 'scorecard' ? 'selected' : ''}
          onClick={() => handleButtonClick('scorecard')}
        >
          Score Card
        </button>
        <button
          className={selectedButton === 'squad' ? 'selected' : ''}
          onClick={() => handleButtonClick('squad')}
        >
          Squad
        </button>
        <button
          className={selectedButton === 'TeamPlayers' ? 'selected' : ''}
          onClick={() => handleButtonClick('TeamPlayers')}
        >
          TeamPlayers
        </button>

      </nav>
      <br />
      <div className={selectedButton === 'commentary' ? 'visible ' : 'hidden'} >
        <h1><Commentry></Commentry></h1>
      </div>
      <div className={selectedButton === 'scorecard' ? 'visible' : 'hidden'}>
        <h1><Scorecard></Scorecard>  </h1>
      </div>
      <div className={selectedButton === 'squad' ? 'visible' : 'hidden'}>
        <h1><Squad/></h1>
      </div>
      <div className={selectedButton === 'TeamPlayers' ? 'visible' : 'hidden'}>
        {/* <h1><TeamPlayers/></h1> */}
      </div>

    </div>
  );
}

export default TeamScore;
