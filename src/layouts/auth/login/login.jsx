import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const login = () => {


  return (
    <div className='loginContainer_22'>
      <div className='LoginformCenter_22'>
        <h1>Login</h1>
        <form action="http://localhost:4000" method='POST' className='formAtLogin_22'>
        <div className='loginInnerContainer_22'>
        <div className='inputFieldAtlogin_22'>
              <p>Email Address : *</p>
              <input type="email"
                required
                placeholder='hell@example.com'
              />
            </div><div className='inputFieldAtlogin_22'>
              <p>Password : *</p>
              <input type="email"
                required
                placeholder='Enter Your Password Here'
              />
            </div>
        </div>
            <div className='lastSectionOfForm_22'>
            <button type="submit">
              Signup
            </button>
            <p>
            <Link to='/signup' className='link'>
              Don't have an account?
            </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login