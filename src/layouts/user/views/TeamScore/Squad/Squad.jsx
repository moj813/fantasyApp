
import './Squad.css';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findAllPLayerOfMatch } from '../../../../../services/operation/player';

const Squad = ({ score, match }) => {

  const [loading, setLoading] = useState(false);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);
  const [teamName, setTeamName] = useState(["Team1", "Team2"])


  function setData() {
    setLoading(true);
    setTeamName([match.teamAName, match.teamBName]);

    const teamAPlayers = score[match.teamAID];
    const teamAPlayerNames = Object.values(teamAPlayers).map(player => player.playerName);

    const teamBPlayers = score[match.teamBID];
    const teamBPlayerNames = Object.values(teamBPlayers).map(player => player.playerName);

    setTeamA(teamAPlayerNames);
    setTeamB(teamBPlayerNames);

    console.log(teamA);
    console.log(teamB);

    setLoading(false);
  }

  useEffect(() => {
    setData();
  }, [])

  return (
    <>
      {
        loading ? (

        <div className="squad-container loading">
          <span class="loader"></span>
        </div>
        
        ) : (
        
          <>

            {
              !teamA && !teamB ? (<>No Data Found</>) : (
              
              <>
                <div className="squad-container">
          <div className="team-section">
            <h2>{teamName[0]}</h2>
            <div className="players-list">

              {
                teamA.map((player, index) => (
                  <div className="player" key={index}>
                    {player}
                  </div>
                ))
              }

            </div>
          </div>
          <div className="team-section">
            <h2>{teamName[1]}</h2>
            <div className="players-list">

              {
                teamB.map((player, index) => (
                  <div className="player" key={index}>
                    {player}
                  </div>
                ))
              }

            </div>
          </div>
        </div>
              </>
              
              )
            }
          
          </>
        
        )
      }
    </>
  );
}

export default Squad;
