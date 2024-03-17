import React, { useEffect, useState } from "react";
import "./Playingsquad.css";
import { NavLink, useParams , useNavigate } from "react-router-dom";
import { findAllPLayerOfMatch } from "../../../../services/operation/player";
import Squad from "../squad/Squad";
import { addPlaying11 } from "../../../../services/operation/tournament";

const PlayingSquad = () => {
  const { matchID } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [teamA, setTeamA] = useState([]);
  const [teamB, setTeamB] = useState([]);
  const [selectedPlayersTeamA, setSelectedPlayersTeamA] = useState([]);
  const [selectedPlayersTeamB, setSelectedPlayersTeamB] = useState([]);

  const submitHandler = () => {
    console.log("Team A", selectedPlayersTeamA);
    console.log("Team B", selectedPlayersTeamB);
    addPlaying11(matchID , selectedPlayersTeamA , selectedPlayersTeamB , navigate)
    
  };

  useEffect(() => {
    findAllPLayerOfMatch(setLoading, setTeamA, setTeamB, matchID);
  }, [matchID]);

  // Check if both teams have at least 11 players selected
  const isNextDisabled = selectedPlayersTeamA.length < 2 || selectedPlayersTeamB.length < 2;

  return (
    <div className="playing-squad">
      <h1>Playing Squad: Team A</h1>
      <Squad
        teamA={teamA}
        teamB={teamB}
        selectedPlayersTeamA={selectedPlayersTeamA}
        selectedPlayersTeamB={selectedPlayersTeamB}
        setSelectedPlayersTeamA={setSelectedPlayersTeamA}
        setSelectedPlayersTeamB={setSelectedPlayersTeamB}
      />

      <div className="Bottom_18">
        <span>
          <button className="cancel_18">Cancel</button>
        </span>
        <span>
          <button className="Team_18" onClick={submitHandler} disabled={isNextDisabled}>
            Next
          </button>
        </span>
      </div>
    </div>
  );
};

export default PlayingSquad;
