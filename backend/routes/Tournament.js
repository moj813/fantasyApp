const express = require("express")
const router = express.Router()

// Routes for Login, Signup,sendotp ,changepassword  and Authentication and resetpassword;


// Import the required controllers and middleware functions
const { isLoggedin , isUser , isAdmin } = require('../middleware/AuthMiddleware');
const {addTeam , getMyTeams} = require("../controller/Team");
const {addTournament , getAllTournament , getTournamentForUser} = require('../controller/Tournament');



// ********************************************************************************************************
//                                      Tournament routes                                             *
// ********************************************************************************************************

router.post("/addtournament",isLoggedin , isAdmin , addTournament); 
router.get("/getalltournaments",getAllTournament) 
router.get("/gettournamentforuser",isLoggedin,isAdmin,getTournamentForUser);
router.post("/addteam",isLoggedin,isAdmin,addTeam);
router.get("/myteams",isLoggedin,isAdmin,getMyTeams)        
// router.post("/changepassword", auth, changePassword)     // Route for Changing the password



module.exports = router

 