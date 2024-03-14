import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dataviewt from "./Dataviewt";
import { NavLink } from "react-router-dom";
import { findMyTeam } from "../../../../services/operation/tournament";
import "./Teams.css";

const Teams = () => {
  const { tournamentID } = useParams();
  const [myTeam, setMyTeam] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    findMyTeam(tournamentID, setMyTeam, setLoading);
  }, []);

  return (
    <div>
      <div className="container_18">
        <div className="box_18">
          <div className="tourhead_18">
            <p>Teams</p>
            <NavLink to={`/admin/${tournamentID}/addteam`}>
              <button>Add New Team</button>
            </NavLink>
          </div>
          {myTeam.length === 0 ? (
            <>No Team Found</>
          ) : (
            <>
              {
                <div className="list_18">
                  <ul>
                    <li class="tourliname_18">Team Name</li>
                    <li class="tourliitem_18">Members</li>
                    <li class="tourliitem_18">Actions</li>
                  </ul>
                  {myTeam.map((data) => (
                    <Dataviewt data={data} key={data._id} />
                  ))}
                </div>
              }
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teams;
