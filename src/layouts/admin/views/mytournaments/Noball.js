import React, { useState } from 'react';
import './Noball.css'; // Import your CSS file
import { NavLink } from 'react-router-dom';

const Noball = ({string, noBallHandler , setView}) => {
  const [run , setRun] = useState(0);

   function handleChange(e){
    setRun( parseInt(e.target.value, 10));
    console.log(run)
  }
  const submtHandler = (e)=>{
    e.preventDefault();
    noBallHandler(run);
    console.log(run);
    setView(0)
  }
  return (
    <div className="outer-box_18">
      <h1>{string}</h1>
      <br></br>
      <form onSubmit={submtHandler} className='formAtNoBall'>
      <div className='inputFieldAtlogin_22'>
                <p>Run Scored : *</p>
                <input type="number"
                  required
                  placeholder='0'
                  name='run'
                  max={6}
                  min={0}
                  value={run}
                  onChange={handleChange}
                />
              </div>
     <button className='done' type='submit'>Done</button>
      </form>
    </div>
  );
};

export default Noball;
