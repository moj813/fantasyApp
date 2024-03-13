import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dataview from "./Dataview";
import "./Mytournaments.css";
import { findMyTournament } from "../../../../services/operation/tournament";

const Mytournaments = () => {
  const [userTournamaments, setUserTournaments] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    findMyTournament(setUserTournaments, setLoading);
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="container_18">
          <div className="box_18">
            <div className="tourhead_18">
              <p>Tournaments</p>
              <NavLink to={"/admin/mytournamnets/addtournaments"}>
                <button>Add Tournament</button>
              </NavLink>
            </div>
            <div className="list_18">
              <ul>
                <li className="tourliname_18">Name</li>
                <li className="tourliitem_18">From Date</li>
                <li className="tourliitem_18">To Date</li>
                <li className="tourliitem_18">Action</li>
              </ul>
              
              {userTournamaments.map((data) => <Dataview data={data}/>)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Mytournaments;
