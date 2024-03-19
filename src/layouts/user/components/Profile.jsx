import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Avtor from '../../../Assets/Images/Avtor.png'
import '../stylesheets/Profile.css'

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operation/authApi"


export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))
  if(!user) return null


  return (
    <button className="relative" onClick={() => setOpen(true)}>
      <div className="ProfileDrop_22">
        <img src={Avtor} alt={`profile-${user?.firstName}`}  className="imageAtDropDown" />
        <AiOutlineCaretDown className="text-sm text-richblack-100" />
      </div>
      {open && (
        <div onClick={(e) => e.stopPropagation()}  ref = {ref}  className="DropDownContainer_22" >
          <Link to="/dashboard/my-profile" onClick={() => setOpen(false)}>
            <div className="linkAtDropDown_22">
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div onClick = {() => { dispatch(logout(navigate)); setOpen(false); }}  className="linkAtDropDown_22" >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  

)}