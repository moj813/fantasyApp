import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/auth"  
import profileReducer from "../slices/profile"
import matchReducer from "../slices/match"

// importing all reducer which is made into slices;



const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authReducer,
    profile:profileReducer,
    match:matchReducer,
    
})

export default rootReducer

