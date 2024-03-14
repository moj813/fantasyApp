import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Dataviewt.css";
import { NavLink } from "react-router-dom";



const Dataviewt = ({ data }) => {
  function handleDeleteClick() {}

  return (
    <div>
      <ul className="icon-list">
        <React.Fragment key={data._id}>
          <li className="tourliname_18">{data.teamName}</li>
          <li className="tourliitem_18">
            <NavLink
              to="/admin/mytournamnets/addplayer"
              className={"navlinkFix_22"}
            >
              {data.player.length}
            </NavLink>
          </li>
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
  );
};

export default Dataviewt;
