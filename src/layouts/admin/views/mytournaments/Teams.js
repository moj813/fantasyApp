import React from 'react'
import Dataviewt from './Dataviewt'
import { NavLink } from 'react-router-dom'
import './Teams.css'

const Teams = () => {
  return (
    <div>
      <div className="container_18">
      <div className="box_18">
        <div className="tourhead_18">
          <p>Teams</p>
          <NavLink to={"/admin/mytournamnets/Addteam"}>
          <button>Add New Team</button>
          </NavLink>
          

        </div>
        <div className="list_18">
          <ul>
            <li class="tourliname_18">Team Name</li>
            <li class="tourliitem_18">Members</li>
            <li class="tourliitem_18">Actions</li>
          </ul>
          <Dataviewt />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Teams
