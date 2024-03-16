import React, { useEffect, useState } from 'react'
import './Schedulematch.css'
import Edit from './Edit.js'
import { NavLink , useParams } from 'react-router-dom'
import { getMyMatches } from '../../../../services/operation/tournament.js'

const Schedulematch = () => {
  const { tournamentID } = useParams();

  
  const [loading , setLoading] = useState(false);
  const [data,setData] = useState([]);

  useEffect(()=>{
    getMyMatches(tournamentID , setLoading , setData);
  },[])

  return (
    <div className="container_18">
      <div className="box_18">
        <div className="tourhead_18">
          <p>Matches</p>
          <NavLink to={`/admin/${tournamentID}/Choose`}>
          <button>Schedule Match</button>
          </NavLink>
          

        </div>
        <div className="list_18">
          <ul>
            <li class="tourliname_18">Match Between</li>
            <li class="tourliitem_18">Ground/dfCiy</li>
            <li class="tourliitem_18">Match Time</li>
            <li class="tourliitem_18">Actions</li>
          </ul>
         {
          data.map((data2 , index)=> <Edit item={data2} key={index} />)
         }
        </div>
      </div>
    </div>
  )
}

export default Schedulematch