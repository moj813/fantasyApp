import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import "./Dataview.css";
import { NavLink } from "react-router-dom";

const Dataview = ({ item }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeleteClick = (itemId) => {};

  const handleClick = useCallback(
    (event) => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        // Click inside the dropdown, do nothing
        return;
      }

      setIsDropdownOpen(false);
    },
    [setIsDropdownOpen]
  );

  const formatDate = (dateString) => {
    const dateTime = new Date(dateString);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    return `${day < 10 ? "0" : ""}${day}-${
      month < 10 ? "0" : ""
    }${month}-${year} ${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}`;
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <div>
      <ul className="icon-list">
        {
          console.log(item)
        }
        <React.Fragment key={item.id}>
          <li className="tourliname_18">
            {item.teamAName} Vs {item.teamBName}
          </li>
          <li className="tourliitem_18">{item.city}</li>
          <li className="tourliitem_18">{formatDate(item.matchTime)}</li>
          <li
            className={`icon-actions${isDropdownOpen ? " active" : ""}`}
            ref={dropdownRef}
          >
            <NavLink to={"/admin/mytournaments/Choose"}>
              <span className="gap">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </NavLink>

            <span className="gap" onClick={() => handleDeleteClick(item.id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </span>
            <span className="gap" onClick={toggleDropdown}>
              <FontAwesomeIcon icon={faCog} />
            </span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <NavLink to={`/admin/${item.tournamentID}/match/${item._id}`}>
                  <p>Playing Squad</p>
                </NavLink>

                <NavLink to={`/admin/mytournaments/${item._id}/score`}>
                  <p>Update Score</p>
                </NavLink>
              </div>
            )}
          </li>
        </React.Fragment>
      </ul>
    </div>
  );
};

export default Dataview;
