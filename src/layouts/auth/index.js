import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './components/homelayout.css'
const index = () => {
  return (
    <div className='homeContainer_22'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default index