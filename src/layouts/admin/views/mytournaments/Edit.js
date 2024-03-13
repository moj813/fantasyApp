import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Dataview.css';
import { NavLink } from 'react-router-dom';

const Dataview = () => {
  const [data, setData] = useState([
    { id: 1, name: 'vatsal', startDate: '02/02/2024', endDate: '26/02/2024' },
    // Add more data items as needed
  ]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDeleteClick = (itemId) => {
    // Delete the entire list item by filtering out the item with the specified itemId
    setData((prevData) => prevData.filter((item) => item.id !== itemId));
  };

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

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <div>
      <ul className="icon-list">
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <li className="tourliname_18">{item.name}</li>
            <li className="tourliitem_18">{item.startDate}</li>
            <li className="tourliitem_18">{item.endDate}</li>
            <li className={`icon-actions${isDropdownOpen ? ' active' : ''}`} ref={dropdownRef}>
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
                  <NavLink to={"/admin/mytournaments/Playingsquad"}>
                  <p>Playing Squad</p>
                  </NavLink>

                  <NavLink to={"/admin/mytournaments/Schedulematch"}>
                    <p>Match Officials</p>
                  </NavLink>
                  
                </div>
              )}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Dataview;
