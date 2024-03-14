import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Dataview.css';
import { NavLink } from 'react-router-dom';


const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

const Dataview = (data) => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const handleDeleteClick = () => {
    // Delete the entire list item by filtering out the item with the specified itemId
    
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
      {
        console.log(data.data._id)
      }
      <ul>
            {/* <li class="tourliname_18">{data.data.tournamentName}</li>
            <li class="tourliitem_18">{formatDate(data.data.startDate)}</li>
            <li class="tourliitem_18">{formatDate(data.data.lastDate)}</li>
            <li class="tourliitem_18"><VscEdit /> <VscSettingsGear /></li> */}

<React.Fragment key={data.id}>
            <li className="tourliname_18">{data.data.tournamentName}</li>
            <li className="tourliitem_18">{formatDate(data.data.startDate)}</li>
            <li className="tourliitem_18">{formatDate(data.data.lastDate)}</li>
            <li className={`icon-actions${isDropdownOpen ? ' active' : ''}`} ref={dropdownRef}>
              <NavLink to={"/admin/mytournamnets/addtournaments"}>
              <span className="gap">
                <FontAwesomeIcon icon={faEdit} />
              </span>
              </NavLink>
              
              <span className="gap" onClick={() => handleDeleteClick(data.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              <span className="gap" onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faCog} />
              </span>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <NavLink to={`/admin/${data.data._id}/teams`}>
                  <p>Teams</p>
                  </NavLink>

                  <NavLink to={"/admin/mytournaments/Schedulematch"}>
                    <p>Matches</p>
                  </NavLink>
                  
                </div>
              )}
            </li>
          </React.Fragment>

          </ul>
    </div>
  )
}

export default Dataview
