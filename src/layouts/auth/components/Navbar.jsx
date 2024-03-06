import React from 'react';
import { NavLink , Link} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='NavbarContainer_22'>


        <div className='logoContainer_22'>CrickFantsy</div>


        <div className='centralLinks_22'>

            <NavLink to="/" className={"navlink"}>
                Home
            </NavLink>

            <NavLink to="/livescore" className={"navlink"}>
                Live Score
            </NavLink>

            <NavLink to="/contactus" className={"navlink"}>
                Contact US
            </NavLink>

            <NavLink to="/policy" className={"navlink"}>
                Privacy Policy
            </NavLink>
            
        </div>



        <div className='authBtn_22'>

            <button className='navBtn_22'>
            <Link to="/login" className={"link"}>
                Login
            </Link>
            </button>

            <button  className='navBtn_22'>
            <Link to="/signup" className={"link"}>
                Signup
            </Link>
            </button>
            
        </div>
    </div>
  )
}

export default Navbar