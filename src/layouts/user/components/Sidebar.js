import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CloseBtn from './CloseBtn';
function Sidebar({toggleHandler}) {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkItems = [
    { icon: 'home-outline', text: 'Home' },
    { icon: 'cube-outline', text: 'Live Score', path:'/user/livescore' },
<<<<<<< HEAD
    { icon: 'search-outline', text: 'Search' },
    { icon: 'Tournaments-outline', text: 'Tournaments', path:'/user/tournaments' },
    { icon: 'cog-outline', text: 'Settings' },
    {icon: 'cog-outline', text: 'My Contest', path:'/user/mycontest'}
=======
    {icon: 'cog-outline', text: 'My Contest', path:'/user/mycontest'},
    {icon: 'cog-outline', text: 'Tournaments', path:'/user/tournaments'},
>>>>>>> 8b8f74eda5ad9653f1731449ca41a792688055bd
  ];
  const handleLinkItemClick = (index) => {
    setSelectedIndex(index);
  };



  return (
    <div className="container">
      <div className='logoContainer'>
      <div >
        Logo
      </div>
      <button onClick={()=>toggleHandler()} className='toggle-btn'>
        <CloseBtn />
      </button>
      </div>
      <hr className='hrline'/>
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