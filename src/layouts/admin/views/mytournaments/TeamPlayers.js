import React, { useEffect, useState } from "react";
import Dataviewplayer from "./Dataviewplayer";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { findMyTeam } from "../../../../services/operation/tournament";
import { findPlayer } from "../../../../services/operation/player";
import "./Teams.css";
const TeamPlayers = () => {
  const { tournamentID, teamID } = useParams();
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);
  console.log(players);
  useEffect(() => {
    findPlayer(setLoading, setPlayers, teamID);
  }, []);
  return (
    <div>
      <div className="container_18">
        <div className="box_18">
          <div className="tourhead_18">
            <p>Players</p>
            <NavLink to={`/admin/${tournamentID}/team/${teamID}/addplayer`}>
              <button>Add New Player</button>
            </NavLink>
          </div>
          {loading ? (
            <h1>Loading..</h1>
          ) : (
            <>
              {players.length === 0 ? (
                <>No Player Found </>
              ) : (
                <>
                  {
                    <div className="list_18">
                      <ul>
                        <li class="tourliname_18">Player Name</li>
                        <li class="tourliitem_18">Actions</li>
                      </ul>
                      {players.map((data) => (
                        <Dataviewplayer data={data} key={data._id} />
                      ))}
                    </div>
                  }
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamPlayers;
