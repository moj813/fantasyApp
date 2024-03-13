import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Dataviewt.css';
import { NavLink } from 'react-router-dom';

// ... (import statements)

// ... (import statements)

const Dataviewt = () => {
  const [data, setData] = useState([
    { id: 1, Teamname: 'csk', Members: 'Add Player' },
    // Add more data items as needed
  ]);

  const handleDeleteClick = (itemId) => {
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <ul className="icon-list">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <li className="tourliname_18"><NavLink to="/admin/mytournaments/matches">
            {item.Teamname}</NavLink></li>
            <li className="tourliitem_18">
              {/* Use NavLink to navigate to the specified route */}
              <NavLink to="/admin/mytournamnets/addplayer">
                {item.Members}
              </NavLink>
            </li>
            <li className="icon-actions">
              <NavLink to="/admin/mytournamnets/Addteam">
                <span className="gap">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              </NavLink>
              <span className="gap" onClick={() => handleDeleteClick(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              {/* Removed the setting icon and its functionality */}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Dataviewt;
