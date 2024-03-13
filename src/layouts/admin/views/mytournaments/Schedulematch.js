import React from 'react'
import './Schedulematch.css'
import Edit from './Edit.js'
import { NavLink } from 'react-router-dom'

const Schedulematch = () => {
  return (
    <div className="container_18">
      <div className="box_18">
        <div className="tourhead_18">
          <p>Matches</p>
          <NavLink to="/admin/mytournaments/Choose">
          <button>Schedule Match</button>
          </NavLink>
          

        </div>
        <div className="list_18">
          <ul>
            <li class="tourliname_18">Match Between</li>
            <li class="tourliitem_18">Ground/Ciy</li>
            <li class="tourliitem_18">Match Time</li>
            <li class="tourliitem_18">Actions</li>
          </ul>
          <Edit />
        </div>
      </div>
    </div>
  )
}

export default Schedulematch