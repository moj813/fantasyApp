import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Dataviewt.css";
import { NavLink } from "react-router-dom";


const Dataviewplayer = ({data}) => {
  function handleDeleteClick() {}
  return (
    <div>
      <ul className="icon-list">

        <React.Fragment key={data._id}>

          <li className="tourliname_18">{data.playerName}</li>

          <li className="icon-actions">

            <NavLink to="/admin/mytournamnets/Addteam">
              <span className="gap">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </NavLink>

            <span className="gap" onClick={() => handleDeleteClick(data.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>

          </li>
        </React.Fragment>
      </ul>
    </div>
  )
}

export default Dataviewplayer