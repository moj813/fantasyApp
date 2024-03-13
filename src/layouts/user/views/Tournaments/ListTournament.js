import React from 'react'
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
          __v: 0
        },
        {
          tournamentName: "Charusat Box Cricket",
          cityName: "asas",
          organiserName: "Nishant Kathrotiya",
          startDate: "2024-03-13T00:00:00.000Z",
          lastDate: "2024-03-22T00:00:00.000Z",
          __v: 0
        }, {
          tournamentName: "Charusat Box Cricket",
          cityName: "asas",
          organiserName: "Nishant Kathrotiya",
          startDate: "2024-03-13T00:00:00.000Z",
          lastDate: "2024-03-22T00:00:00.000Z",
          __v: 0
        }
      ];
  return (
    <div>
        {
           data.map((tournament)=><TournamentView tournament={tournament} />)
        }
    </div>
  )
}

export default ListTournament