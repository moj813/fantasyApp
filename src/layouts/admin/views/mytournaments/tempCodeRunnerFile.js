// TeamBox.js

import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { NavLink,useParams } from 'react-router-dom';
import { findMyTeamDisptach } from '../../../../services/operation/tournament';
import { setTeamA , setTeamB } from '../../../../slices/match';

import './Choose.css';

const Choose = () => {

  const { tournamentID } = useParams();
  const [firstTeamDropdown, setFirstTeamDropdown] = useState(false);
  const [secondTeamDropdown, setSecondTeamDropdown] = useState(false);
  const dispatch = useDispatch();

  const toggleFirstTeamDropdown = () => {
    setFirstTeamDropdown(!firstTeamDropdown);
    setSecondTeamDropdown(false);
  };

  const toggleSecondTeamDropdown = () => {
    setSecondTeamDropdown(!secondTeamDropdown);
    setFirstTeamDropdown(false);
  };

  const handleTeamA = ()=>{
    // dispatch(setLoading(true,34,"sadfsaf"));
  }
  // const [myTeam, setMyTeam] = useState([]);
  // const [loading, setLoadingw] = useState(false);

  const {teams, loading} = useSelector((state)=>state.match)

  useEffect(() => {
    // findMyTeam(tournamentID, setMyTeam, setLoadingw);
    dispatch(findMyTeamDisptach(tournamentID));
  }, []);



  return (
  
    <div className="team-box">
      <div className="team" onClick={toggleFirstTeamDropdown}>
        Team A
        {firstTeamDropdown && (
          <div className="dropdown">
            {
              teams.map((data)=>
                <p onClick={handleTeamA}>{data.teamName}</p>
              )
            }
            {/* Add more options as needed */}
          </div>
        )}
      </div>
      <p>VS</p>
      <div className="team" onClick={toggleSecondTeamDropdown}>
        Team B
        {secondTeamDropdown && (
          <div className="dropdown">
           {
              teams.map((data)=>
                <p onClick={(e)=>console.log(data.teamName)}>{data.teamName}</p>
              )
            }
            {/* Add more options as needed */}
          </div>
        )}
      </div>
      <div className="buttons">
        <NavLink to="/admin/mytournaments/Schedulematch">
        <button className="back-button">Back</button>
        </NavLink>
        
        <NavLink to="/admin/mytournaments/Matchform">
        <button className="next-button">Next</button>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Choose;
