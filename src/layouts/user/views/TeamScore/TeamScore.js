import React, { useState } from 'react';
import './TeamScore.css';
import Commentry from './Commentry/Commentry';
import Scorecard from './Scorecard/Scorecard';
import Squad from './Squad/Squad';
<<<<<<< HEAD
import TeamPlayers from '../Tournaments/TeamPlayers/TeamPlayers';
import Contests from '../Tournaments/TeamPlayers/Contests/Contests';
=======
// import TeamPlayers from './TeamPlayers/TeamPlyers';
>>>>>>> 8b8f74eda5ad9653f1731449ca41a792688055bd


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
<<<<<<< HEAD
        <button
          className={selectedButton === 'TeamPlayers' ? 'selected' : ''}
          onClick={() => handleButtonClick('TeamPlayers')}
        >
          TeamPlayers
        </button>
        <button
          className={selectedButton === 'Contests' ? 'selected' : ''}
          onClick={() => handleButtonClick('Contests')}
        >
          Contests
        </button>
=======
>>>>>>> 8b8f74eda5ad9653f1731449ca41a792688055bd

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
<<<<<<< HEAD
      <div className={selectedButton === 'TeamPlayers' ? 'visible' : 'hidden'}>
        <h1><TeamPlayers/></h1>
      </div>
      <div className={selectedButton === 'Contests' ? 'visible' : 'hidden'}>
        <h1><Contests/></h1>
      </div>
=======
>>>>>>> 8b8f74eda5ad9653f1731449ca41a792688055bd

    </div>
  );
}

export default TeamScore;
