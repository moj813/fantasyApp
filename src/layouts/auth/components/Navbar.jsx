import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navbar.css'
import ProfileDropdown from '../../../component/Profile';
const Navbar = () => {
    const { user } = useSelector((state) => state.profile);
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

                {
                    user == null ? (<>
                        <Link to="/login" className={"link"}>
                            <button className='navBtn_22'>
                                Login
                            </button>
                        </Link>

                        <Link to="/signup" className={"link"}>
                            <button className='navBtn_22'>
                                Signup
                            </button>
                        </Link></>) : (
                        <ProfileDropdown />
                    )


                }

            </div>
        </div>
    )
}

export default Navbar