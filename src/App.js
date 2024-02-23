import React from "react";
import { Route, Routes } from 'react-router-dom';
import Admin from './layouts/admin/index';
import User from './layouts/user/index';
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
import LiveScore from "./layouts/user/views/LiveScore/LiveScore";
import TeamScore from "./layouts/user/views/TeamScore/TeamScore"

function App() {
  return (
    <Routes>
      <Route path="/" element={<>This is Home Page</>}/>
      
      {/* Routes for Admin Only */}
      <Route path='/admin' element={<Admin />}>
        <Route path="/admin/default" element={<>This is Admin Default</>} />
        <Route path="/admin/mytournaments" element={<Mytournaments />} />
        <Route path="/admin/livescore" element={<LiveScore />} />
        <Route path="/admin*" element={<>404 Page Not Found</>} />
      </Route>

      {/* Routes for User Only */}
      <Route path='/user' element={<User />}>
        <Route path="/user/default" element={<>This is User Default</>} />
        <Route path="/user/mytournaments" element={<>This is User</>} />
        <Route path="/user/livescore" element={<LiveScore />} />
        <Route path="/user/livescore/team-score" element={<TeamScore />} /> {/* Use element prop instead of component */}
        <Route path="/user/*" element={<>404 Page Not Found</>} />
      </Route>

      <Route path="*" element={<>404 Page Not Found</>} />
    </Routes>
  );
}

export default App;
