import React, { useEffect, useState } from "react";
import TournamentView from "./TournamentView";
import { findAllTournaments } from "../../../../services/operation/tournament";
import "./Tournaments.css";
import { NavLink } from "react-router-dom";

const ListTournament = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    findAllTournaments(setTournaments, setLoading);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {tournaments.length === 0 ? (
            <h1>No Data Found</h1>
          ) : (
            <div className="cards">
              {tournaments.map((tournament) => (
                <NavLink
                  className="navitem"
                  to={`/user/tournament/${tournament._id}/match`}
                >
                  <TournamentView tournament={tournament} />
                </NavLink>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListTournament;
