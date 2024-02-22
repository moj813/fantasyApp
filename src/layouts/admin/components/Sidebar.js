import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkItems = [
    { icon: 'home-outline', text: 'Home' },
    { icon: 'cube-outline', text: 'Dashboard' },
    { icon: 'search-outline', text: 'Search' },
    { icon: 'bookmark-outline', text: 'Bookmarks' },
    { icon: 'cog-outline', text: 'Settings' },
    {icon: 'cog-outline', text: 'My Tournamentes' , path : '/admin/mytournaments'}
  ];

  const handleLinkItemClick = (index) => {
    setSelectedIndex(index);
  };



  return (
    <div className="container">
      <div className="logo">
        Logo
      </div>
      <ul className="link-items">
        {linkItems.map((item, index) => (
          <li
            key={index}
            className={`link-item ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => handleLinkItemClick(index)}
          >
            <NavLink to={item.path} className="link">
              <span >
                {item.text}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default Sidebar;