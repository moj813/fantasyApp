import React , {useState} from 'react';
import './Toss.css';
import { NavLink } from 'react-router-dom';
import { updateTossResult } from '../../../../services/operation/score';
import { useDispatch } from 'react-redux';


const Toss = ({match}) => {

// console.log(match)
  const [tossWinner, setTossWinner] = useState([null,null]);
  const [tossDecision, setTossDecision] = useState([null,null]);
  const dispatch =useDispatch();

  const handleTossWinnerSelection = (team) => {
    setTossWinner(team);
    console.log(tossWinner)
  };

  const handleTossDecisionSelection = (decision) => {
    setTossDecision(decision);
  };
  const handleSubmit = () => {
    let battingTeam, bowlingTeam;
  
    if (tossDecision === 'Batting') {
      battingTeam = { teamID: tossWinner[0], teamName: tossWinner[1] };
      bowlingTeam = { 
        teamID: match.teamAID === battingTeam.teamID ? match.teamBID : match.teamAID,
        teamName: match.teamAName === battingTeam.teamName ? match.teamBName : match.teamAName
      };
    } else if (tossDecision === 'Bowling') {
      bowlingTeam = { teamID: tossWinner[0], teamName: tossWinner[1] };
      battingTeam = { 
        teamID: match.teamAID === bowlingTeam.teamID ? match.teamBID : match.teamAID,
        teamName: match.teamAName === bowlingTeam.teamName ? match.teamBName : match.teamAName
      };
    }
    
    console.log("Batting Team At calling", battingTeam);
    console.log("Bowling Team At calling", bowlingTeam);
    dispatch(updateTossResult(match._id, tossWinner, tossDecision, battingTeam, bowlingTeam));
  }
  


  return (
    <div className="atToss-outer-box">
    <h2 className='atToss-toos'>TOSS</h2>
    <div className="atToss-inside-box">
      <p>Who won the toss?</p>
      <div className="atToss-card-row">
        <div className={`atToss-card ${tossWinner[0] === match.teamAID ? 'atToss-selected' : ''}`} onClick={() => handleTossWinnerSelection([match.teamAID , match.teamAName])}>{match.teamAName}</div>
        <div className={`atToss-card ${tossWinner[0] === match.teamBID ? 'atToss-selected' : ''}`} onClick={() => handleTossWinnerSelection([match.teamBID , match.teamBName])}>{match.teamBName}</div>
      </div>
      <p>Winner of the toss elected to?</p>
      <div className="atToss-card-row">
        <div className={`atToss-card ${tossDecision === 'Batting' ? 'atToss-selected' : ''}`} onClick={() => handleTossDecisionSelection('Batting')}>Bat</div>
        <div className={`atToss-card ${tossDecision === 'Bowling' ? 'atToss-selected' : ''}`} onClick={() => handleTossDecisionSelection('Bowling')}>Bowl</div>
      </div>
    </div>
   
      <button className="atToss-custom-button" disabled={!tossWinner[0] || !tossDecision[0]} onClick={handleSubmit} >Let's Play</button>
  </div>
  );
}

export default Toss;
