import React, { useEffect, useState } from "react";
import TournamentView from "./TournamentView";
import { findAllTournaments } from "../../../../services/operation/tournament";
import "./Tournaments.css";

const ListTournament = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    findAllTournaments(setTournaments,setLoading);
  },[])

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {tournaments.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            <>
              {tournaments.map((tournament) => (
                <TournamentView tournament={tournament}/>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ListTournament;
