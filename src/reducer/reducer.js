import {combineReducers} from "@reduxjs/toolkit";

import authReducer from "../slices/auth"  
import profileReducer from "../slices/profile"
import matchReducer from "../slices/match"
import matchScoreReducer from "../slices/matchScore"

// importing all reducer which is made into slices;



const rootReducer  = combineReducers({                  // combining all reducer;
    auth: authReducer,
    profile:profileReducer,
    match:matchReducer,
    matchScore :matchScoreReducer
    
})

export default rootReducer

