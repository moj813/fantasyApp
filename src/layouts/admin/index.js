import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import "./stylesheets/style.css";
import { Outlet } from "react-router";
import HamBurger from "./components/HamBurger.js";
const Index = () => {
  
  const [toogleNav, setToogleNav] = useState(true);
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
              </div>
              <h1>Hello User</h1>
              <Outlet />
            </div>
          </div>
        </>
  
    </>
  );
};

export default Index;
