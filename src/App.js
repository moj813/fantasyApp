import React from "react";
import { Route,Routes} from 'react-router-dom'
import Admin from './layouts/admin/index'
import User from './layouts/user/index'
import Mytournaments from "./layouts/admin/views/mytournaments/Mytournaments";
import LiveScore from "./layouts/user/views/LiveScore/LiveScore";
import TeamScore from "./layouts/user/views/TeamScore/TeamScore";
import Addtournaments from "./layouts/admin/views/mytournaments/Addtournaments";
function App() {

  return (
    <Routes>
        <Route path="/" element={<>This is Home Page</>}/>
        
    {/* This is For Admin ONly  */}

        {/* <Route path='/admin' element={<Admin />}>
              <Route>
                <Route path="/admin/default" element={<>This is Admin Degfault</> } />
                <Route path="/admin/mytournaments" element={<Mytournaments/> } />
                <Route path="/admin/livescore" element={<LiveScore/> } />
                <Route path="/admin/*" element={<>404 PAge Not Found</>} />
              </Route>
        </Route> */}



<Route path='/admin' element={<Admin />}>
        <Route path="/admin/default" element={<>This is Admin Default</>} />
        <Route path="/admin/mytournaments" element={<Mytournaments />} />
        <Route path="/admin/mytournamnets/addtournaments" element={<Addtournaments />} />
        <Route path="/admin*" element={<>404 Page Not Found</>} />
      </Route>


        {/* This is for User only  */}

        <Route path='/user' element={<User />}>
        <Route path="/user/default" element={<>This is User Default</>} />
        <Route path="/user/mytournaments" element={<>This is User</>} />
        <Route path="/user/livescore" element={<LiveScore />} />
        <Route path="/user/livescore/:id" element={<TeamScore />} /> {/* Use element prop instead of component */}
        <Route path="/user/*" element={<>404 Page Not Found</>} />
      </Route>

        <Route path="/login" element={<>This is Login</>} />
        <Route path="*" element={<>404 PAge Not Found</>} />


    </Routes>
  );
}

export default App;
