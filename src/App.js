import React from "react";
import {  useSelector } from "react-redux"                     // Redux
import { Route, Routes } from "react-router-dom"


// import { getUserDetails } from "./services/operations/profileAPI"


import OpenRoute from "./component/OpenRoute";
import PrivateRoute from "./component/PrivateRoute";
import Tournaments from "./layouts/user/views/Tournaments/Tournaments";
import Admin from './layouts/admin/index'
import User from './layouts/user/index'
import HomeLayout from './layouts/auth/index';
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
import LiveScore from "./layouts/user/views/LiveScore/LiveScore";
import TeamScore from "./layouts/user/views/TeamScore/TeamScore";
import Addtournaments from "./layouts/admin/views/mytournaments/Addtournaments";
import Login from "./layouts/auth/login/Login/Login";
import Signup from './layouts/auth/signup/Signup'
import Home from './layouts/auth/home/Home'
import EmailVerify from "./layouts/auth/signup/EmailVerify";



function App() {

  const { user } = useSelector((state) => state.profile)

  // useEffect(() => {                                                    // it store data of user in localstroage and when we open browser then that user logined;                 
  //   if(localStorage.getItem("token")){
  //     const token = JSON.parse(localStorage.getItem("token"))
  //     dispatch(getUserDetails(token, navigate))
  //   }
  // }, [])


  return (
    <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<OpenRoute><Login /></OpenRoute>} />
          <Route path="/signup" element={<OpenRoute><Signup /></OpenRoute>} />
          <Route path="/verify-email" element={<OpenRoute> <EmailVerify /></OpenRoute>} />
        </Route>
        
    {/* This is For Admin ONly  */}

        {/* <Route path='/admin' element={<Admin />}>
              <Route>
                <Route path="/admin/default" element={<>This is Admin Degfault</> } />
                <Route path="/admin/mytournaments" element={<Mytournaments/> } />
                <Route path="/admin/livescore" element={<LiveScore/> } />
                <Route path="/admin/*" element={<>404 PAge Not Found</>} />
              </Route>
        </Route> */}


{ user?.role === "admin" && (
                                <Route path='/admin' element={<PrivateRoute><Admin /></PrivateRoute>}>
                                  <Route path="/admin/default" element={<>This is Admin Default</>} />
                                  <Route path="/admin/mytournaments" element={<Mytournaments />} />
                                  <Route path="/admin/livescore" element={<LiveScore />} />
                                  <Route path="/admin/mytournamnets/addtournaments" element={<Addtournaments />} />
                                  <Route path="/admin*" element={<>404 Page Not Found</>} />
                                </Route>
                            )
      }

        {/* This is for User only  */}

      { user?.role === "user" && (
                                      <Route path='/user' element={<User />}>
                                          <Route path="/user/default" element={<>This is User Default</>} />
                                          <Route path="/user/tournaments" element={<Tournaments/>} />
                                          <Route path="/user/livescore" element={<LiveScore />} />
                                          <Route path="/user/livescore/:id" element={<TeamScore />} /> {/* Use element prop instead of component */}
                                          <Route path="/user/*" element={<>404 Page Not Found</>} />
                                     </Route>
                                  )
      }

        <Route path="/login" element={<>This is Login</>} />
        <Route path="*" element={<>404 PAge Not Found</>} />


    </Routes>
  );
}

export default App;
