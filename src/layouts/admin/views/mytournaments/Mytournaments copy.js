import React from 'react'
import './Mytournaments.css'
import Dataview from './Dataview'
import { NavLink } from 'react-router-dom'

const Mytournaments = () => {
  return (
    <div className="container_18">
      <div className="box_18">
        <div className="tourhead_18">
          <p>Tournaments</p>
          <NavLink to={"/admin/mytournamnets/addtournaments"}>
          <button>Add Tournament</button>
          </NavLink>
          

        </div>
        <div className="list_18">
          <ul>
            <li class="tourliname_18">Name</li>
            <li class="tourliitem_18">From Date</li>
            <li class="tourliitem_18">To Date</li>
            <li class="tourliitem_18">Actions</li>
          </ul>
          <Dataview />
        </div>
      </div>
    </div>
  )
}

export default Mytournaments