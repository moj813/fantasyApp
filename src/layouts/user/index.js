import React, { useState } from "react";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

import Sidebar from "./components/Sidebar.js";
import HamBurger from "./components/HamBurger.js";
import ProfileDropdown from "../../component/Profile.jsx";

import "./stylesheets/style.css";

const Index = () => {

  const [toogleNav, setToogleNav] = useState(true);
  const user = useSelector((state)=>state.profile.user);

  function toggleHandler() {
    setToogleNav(!toogleNav);
  }

  return (
    <>

        <>
          <div className="App">
            <div className="sidebar-collapse">
              {toogleNav ? <Sidebar toggleHandler={toggleHandler} /> : <div className="nothing"></div>}
            </div>
            <div className="dashboard">
              <div className="top-nav">
                <button onClick={() => setToogleNav(!toogleNav)}>
                  <HamBurger />
                </button>
                <ProfileDropdown />
              </div>
              <h1>Hello, {user.firstName}</h1>
              <Outlet />
            </div>
          </div>
        </>
      
    </>
  );
};

export default Index;
