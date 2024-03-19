import React from 'react'
import './Score.css'
import { NavLink } from 'react-router-dom';



const Score = () => {
  return (
    
    <div className="Outer-box">
      <div className="score">
        <div className='div1'>
        <span className='first'>0/0<span className='second'>(0/2)</span></span>
        </div>
        <div className='div2'>
          <div className='subdiv1'>
              <h5>(Batting)</h5>
              <h2 className='vivek'> Vivek</h2>
              <h4>1(1)</h4>
          </div>
          <div className='subdiv2'>
            <h5>(Batting)</h5>
            <h2 className='Rikin'>Rikin</h2>
            <h4>3(2)</h4>
          </div>
        </div>
      </div>

      <div className='bowl'>
        <span className='span'>(bowling)<span>Meet Shah</span></span>
        <div className='main_18'>
          <div className='main_18_inner'>

          <div className='round'>1 <div>nb</div></div>
          <div className='round'>2 <div></div></div>
          <div className='round'>4 <div>NB</div></div>
          <div className='round'>5 <div></div></div>
          <div className='round'>6 <div>NB</div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          <div className='round'>7 <div></div></div>
          </div>
        </div>
      </div>
      
    <div className='grid'>
  <div className='score1button_18'><button className='scorebutton_18'>0</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>1</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>2</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>UNDO</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>3</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>4</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>6</button></div>
  <div className='score1button_18'><NavLink to="/admin/mytournaments/Out"><button className='scorebutton_18'>OUT</button></NavLink></div>
  <div className='score1button_18'><button className='scorebutton_18'>WD</button></div>
  <div className='score1button_18'><NavLink to="/admin/mytournaments/Noball"><button className='scorebutton_18'>NB</button></NavLink></div>
  <div className='score1button_18'><button className='scorebutton_18'>BYE</button></div>
  <div className='score1button_18'><button className='scorebutton_18'>LB</button></div>
</div>

    </div>
  )
}

export default Score
