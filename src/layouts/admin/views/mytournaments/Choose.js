import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { findMyTeamDisptach } from '../../../../services/operation/tournament';
import { setTeamA, setTeamB } from '../../../../slices/match';

import './Choose.css';
import { toast } from 'react-toastify';

const Choose = () => {
  const { tournamentID } = useParams();
  const [firstTeamDropdown, setFirstTeamDropdown] = useState(false);
  const [secondTeamDropdown, setSecondTeamDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleFirstTeamDropdown = () => {
    setFirstTeamDropdown(!firstTeamDropdown);
    setSecondTeamDropdown(false);
  };

  const toggleSecondTeamDropdown = () => {
    setSecondTeamDropdown(!secondTeamDropdown);
    setFirstTeamDropdown(false);
  };

  const handleTeamA = (team) => {
    dispatch(setTeamA(team));
  };

  const handleTeamB = (team) => {
    dispatch(setTeamB(team));
  };

  const nextHandler = ()=>{
    if(!teamA || !teamB){
      toast.error("Select Both Team")
    }else{
      navigate(`/admin/${tournamentID}/matchform`);
    }
    
  }

  const { teams, teamA, teamB, loading } = useSelector((state) => state.match);

  useEffect(() => {
    dispatch(findMyTeamDisptach(tournamentID));
  }, []);

  return (
    <div className="team-box">
      <div className="team" onClick={toggleFirstTeamDropdown}>
        {
          !teamA ? (<>Team A</>):(<>{teamA.teamName}</>)
        }
        {firstTeamDropdown && (
          <div className="dropdown">
            {teams.map((data) => {
              if (teamB && teamB._id === data._id) return null;
              return <p onClick={() => handleTeamA(data)}>{data.teamName}</p>;
            })}
          </div>
        )}
      </div>
      <p>VS</p>
      <div className="team" onClick={toggleSecondTeamDropdown}>
      {
          !teamB ? (<>Team B  </>):(<>{teamB.teamName}</>)
        }
        {secondTeamDropdown && (
          <div className="dropdown">
            {teams.map((data) => {
              if (teamA && teamA._id === data._id) return null;
              return <p onClick={() => handleTeamB(data)}>{data.teamName}</p>;
            })}
          </div>
        )}
      </div>
      <div className="buttons">
        <NavLink to="/admin/mytournaments/Schedulematch">
          <button className="back-button">Back</button>
        </NavLink>
          <button className="next-button" onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
};

export default Choose;
