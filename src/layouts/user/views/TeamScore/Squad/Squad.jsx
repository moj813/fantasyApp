
import './Squad.css';
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { findAllPLayerOfMatch } from '../../../../../services/operation/player';

const Squad = () => {

  const { matchID } = useParams();
  const [loading, setLoading] = useState();
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [teamName , setTeamName] = useState(["Team1" , "Team2"])


  useEffect(() => {
    findAllPLayerOfMatch(setLoading ,setTeamName, setTeamA, setTeamB, matchID);
  }, [matchID]);

  return (
    <>
      {
        loading ? (<div className="squad-container loading">
          <span class="loader"></span>
        </div>) : (<div className="squad-container">
          <div className="team-section">
            <h2>{teamName[0]}</h2>
            <div className="players-list">
              {teamA.map((player, index) => (
                <div className="player" key={index}>
                  {player.playerName}
                </div>
              ))}
            </div>
          </div>
          <div className="team-section">
            <h2>{teamName[1]}</h2>
            <div className="players-list">
              {teamB.map((player, index) => (
                <div className="player" key={index}>
                {player.playerName}
              </div>
              ))}
            </div>
          </div>
        </div>)
      }
    </>
  );
}

export default Squad;
