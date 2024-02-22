import React from "react";
import {Route,Routes} from 'react-router-dom'
import Admin from './layouts/admin/index'
import User from './layouts/user/index'
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
import LiveScore from "./layouts/admin/views/LiveScore";
function App() {
  return (
    <Routes>
        <Route path="/" element={<>This is Home Page</>}/>
        
    {/* This is For Admin ONly  */}

        <Route path='/admin' element={<Admin />}>
          <Route path="/admin/default" element={<>This is Admin Degfault</> } />
          <Route path="/admin/mytournaments" element={<Mytournaments/> } />
          <Route path="/admin/livescore" element={<LiveScore/> } />
          <Route path="/admin/*" element={<>404 PAge Not Found</>} />
        </Route>


        {/* This is for User only  */}

        <Route  path='/user' element={<User/>}>
          <Route path="/user/default" element={<>This is Admin Degfault</> } />
          <Route path="/user/mytournaments" element={<>This is User</> } />
          <Route path="/user/*" element={<>404 PAge Not Found</>} />
          <Route path="/user/livescore" element={<LiveScore/> } />
        </Route>

        <Route path="*" element={<>404 PAge Not Found</>} />
        

    </Routes>
  );
}

export default App;
