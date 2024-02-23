import React, { useState } from "react";
import {Navigate, Route,Routes} from 'react-router-dom'
import Admin from './layouts/admin/index'
import User from './layouts/user/index'
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
function App() {
  const [isUser , setUser] = useState(true);
  const [isAdmin , setAdmin] = useState(true);
  return (
    <Routes>
        <Route path="/" element={<>This is Home Page</>}/>
        
    {/* This is For Admin ONly  */}

        <Route path='/admin' element={<Admin />}>
              <Route>
                <Route path="/admin/default" element={<>This is Admin Degfault</> } />
                <Route path="/admin/mytournaments" element={<Mytournaments/> } />
                <Route path="/admin/*" element={<>404 PAge Not Found</>} />
              </Route>
        </Route>



    


        {/* This is for User only  */}

        <Route  path='/user' element={<User/>}>
          <Route path="/user/default" element={<>This is Admin Degfault</> } />
          <Route path="/user/mytournaments" element={<>This is User</> } />
          <Route path="/user/*" element={<>404 PAge Not Found</>} />
        </Route>

        <Route path="/login" element={<>This is Login</>} />
        <Route path="*" element={<>404 PAge Not Found</>} />

    </Routes>
  );
}

export default App;
