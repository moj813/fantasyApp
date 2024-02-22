import React from 'react'
import Sidebar from './components/Sidebar.js'
import './stylesheets/style.css'
import { Outlet } from 'react-router'
const index = () => {
  return (
    <div className="App">
    <Sidebar />
    <div className="dashboard">
    <h1>HEllo Admin</h1>
      <Outlet />
    </div>
  </div>
  )
}

export default index