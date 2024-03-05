import React, { useState } from "react";
import Sidebar from "./components/Sidebar.js";
import "./stylesheets/style.css";
import { Outlet, Navigate } from "react-router";
import HamBurger from "./components/HamBurger.js";
const Index = () => {
  const [useAdmin, setAdmin] = useState(true);
  const [toogleNav, setToogleNav] = useState(true);
  function toggleHandler() {
    setToogleNav(!toogleNav);
  }
  return (
    <>
      {useAdmin ? (
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
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default Index;
