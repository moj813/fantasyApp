import React from 'react'
import { NavLink } from 'react-router-dom';
import './Tournaments.css'
import TournamentView from './TournamentView';
const ListTournament = () => {
    const data = [
        {
          tournamentName: "Charusat Box Cricket",
          cityName: "asas",
          organiserName: "Nishant Kathrotiya",
          startDate: "2024-03-13T00:00:00.000Z",
          lastDate: "2024-03-22T00:00:00.000Z",
          _id:12375473567363,
          __v: 0
        },
        {
          tournamentName: "Charusat Box Cricket",
          cityName: "asas",
          organiserName: "Nishant Kathrotiya",
          startDate: "2024-03-13T00:00:00.000Z",
          lastDate: "2024-03-22T00:00:00.000Z",
          _id:1237547356733434,
          __v: 0
        }, {
          tournamentName: "Charusat Box Cricket",
          cityName: "asas",
          organiserName: "Nishant Kathrotiya",
          startDate: "2024-03-13T00:00:00.000Z",
          lastDate: "2024-03-22T00:00:00.000Z",
          _id:1237547356738798,
          __v: 0
        }
      ];
  return (
    <div className='cards'>
        {
           data.map((tournament)=>
           <NavLink className="navitem" to={`/user/tournament/${tournament._id}/match`}><TournamentView tournament={tournament} /></NavLink>
           )
           
        }
    </div>
  )
}

export default ListTournament