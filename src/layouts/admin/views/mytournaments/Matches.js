import React from 'react'
import './Matches.css'
import Dataview from './Dataview'
import { NavLink } from 'react-router-dom'

const Matches = () => {
  return (
    <div className="container_18">
      <div className="box_18">
        <div className="tourhead_18">
          <p>Tournaments</p>
          <NavLink to={"/admin/mytournamnets/addplayer"}>
          <button>Add Player</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Matches