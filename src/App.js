import React from "react";
import {  useSelector } from "react-redux"                     // Redux
import { Route, Routes } from "react-router-dom"


// import { getUserDetails } from "./services/operations/profileAPI"


import OpenRoute from "./component/OpenRoute";
import PrivateRoute from "./component/PrivateRoute";

import Admin from './layouts/admin/index';
import User from './layouts/user/index';

import Login from "./layouts/auth/login/Login/Login";
import Signup from './layouts/auth/signup/Signup'
import Home from './layouts/auth/home/Home'
import EmailVerify from "./layouts/auth/signup/EmailVerify";

import LiveScore from "./layouts/user/views/LiveScore/LiveScore";
import TeamScore from "./layouts/user/views/TeamScore/TeamScore";
import ListTournament from "./layouts/user/views/Tournaments/ListTournament";

import HomeLayout from './layouts/auth/index';
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
import Addtournaments from "./layouts/admin/views/mytournaments/Addtournaments";
import Teams from "./layouts/admin/views/mytournaments/Teams"
import TeamPlayers from "./layouts/admin/views/mytournaments/TeamPlayers";
import Addteam from "./layouts/admin/views/mytournaments/Addteam";
import Addplayer from "./layouts/admin/views/mytournaments/Addplayer";
import Matches from "./layouts/admin/views/mytournaments/Matches";
import Schedulematch from "./layouts/admin/views/mytournaments/Schedulematch";
import Choose from "./layouts/admin/views/mytournaments/Choose";
import Matchform from "./layouts/admin/views/mytournaments/Matchform";
import Playingsquad from "./layouts/admin/views/mytournaments/Playingsquad";
import Edit from "./layouts/admin/views/mytournaments/Edit";
import Teamb from "./layouts/admin/views/mytournaments/Teamb";
import TeamPlayer from "./layouts/user/views/Tournaments/TeamPlayers/TeamPlayer";


import Startbutton from "./layouts/admin/views/mytournaments/Startbutton";
import Toss from "./layouts/admin/views/mytournaments/Toss";
import Choosing from "./layouts/admin/views/mytournaments/Choosing";
import Selectbat from "./layouts/admin/views/mytournaments/Selectbat";
import Selectbowl from "./layouts/admin/views/mytournaments/Selectbowl";
import Score from "./layouts/admin/views/mytournaments/Score";
import Noball from "./layouts/admin/views/mytournaments/Noball";
import Out from "./layouts/admin/views/mytournaments/Out";
import Caught from "./layouts/admin/views/mytournaments/Caught";
import Selectbatsman from "./layouts/admin/views/mytournaments/Selectbatsman";
import Strike from "./layouts/admin/views/mytournaments/Strike";
import NewScore from "./layouts/admin/views/score/NewScore";


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
                                  <Route path="/admin/:tournamentID/teams" element={<Teams />}/>
                                  <Route path="/admin/:tournamentID/addteam" element={<Addteam />}/>
                                  <Route path="/admin/:tournamentID/team/:teamID/addplayer" element={<Addplayer />}/>
                                  <Route path="/admin/mytournaments/Matches" element={<Matches />}/>
                                  <Route path="/admin/:tournamentID/Schedulematch" element={<Schedulematch />} />
                                  <Route path="/admin/:tournamentID/choose" element={<Choose />}/>
                                  <Route path="/admin/:tournamentID/matchform" element={<Matchform />}/>
                                  <Route path="/admin/:tournamentID/match/:matchID" element={<Playingsquad />}/>
                                  <Route path="/admin/mytournaments/Edit" element={<Edit />}/>
                                  <Route path="/admin/mytournaments/Teamb" element={<Teamb />} />
                                  <Route path="/admin/:tournamentID/team/:teamID/player" element={<TeamPlayers />}/>

                                  <Route path="/admin/mytournaments/Startbutton" element={<Startbutton />}/>
                                  <Route path="/admin/mytournaments/Toss" element={<Toss />}/>
                                  <Route path="/admin/mytournaments/Choosing" element={<Choosing />}/>
                                  <Route path="/admin/mytournaments/Selectbat" element={<Selectbat />}/>
                                  <Route path="/admin/mytournaments/Selectbowl" element={<Selectbowl />}/>
                                  <Route path="/admin/mytournaments/Score" element={<Score />}/>
                                  <Route path="/admin/mytournaments/Noball" element={<Noball />}/>
                                  <Route path="/admin/mytournaments/Out" element={<Out />}/>
                                  <Route path="/admin/mytournaments/Caught" element={<Caught />}/>
                                  <Route path="/admin/mytournaments/Selectbatsman" element={<Selectbatsman />}/>
                                  <Route path="/admin/mytournaments/Strike" element={<Strike />}/>

                                  <Route path="/admin/mytournaments/:matchID/score" element={<NewScore />} />

                                  <Route path="/admin*" element={<>404 Page Not Found</>} />
                                </Route>
                            )
      }

        {/* This is for User only  */}

      { user?.role === "user" && (
                                      <Route path='/user' element={<User />}>
                                          <Route path="/user/default" element={<>This is User Default</>} />
                                          <Route path="/user/tournaments" element={<ListTournament />} />
                                          <Route path={`/user/tournament/:tournamentID/match`} element={<LiveScore/>} />
                                          <Route path="/user/:matchID/match/:scoreID" element={<TeamScore />} />
                                          <Route path="/user/*" element={<>404 Page Not Found</>} />
                                          <Route path="/user/tournaments/match/teamplayer" element={<TeamPlayer />} />
                                      </Route>
                                  )
      }

        <Route path="/login" element={<>This is Login</>} />
        <Route path="*" element={<>404 PAge Not Found</>} />


    </Routes>
  );
}

export default App;
