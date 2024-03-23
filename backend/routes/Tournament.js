const express = require("express")
const router = express.Router()

// Routes for Login, Signup,sendotp ,changepassword  and Authentication and resetpassword;


// Import the required controllers and middleware functions
const { isLoggedin , isUser , isAdmin } = require('../middleware/AuthMiddleware');
const {addTeam , getMyTeams} = require("../controller/Team");
const { addPlayer , findPlayer ,findTotalPLayer } = require("../controller/Player");
const {addTournament , getAllTournament , getTournamentForUser} = require('../controller/Tournament');
const { addMatch , getAllMatches , getMyMatches , addPlaying , findMyMatch } = require("../controller/match");



// ********************************************************************************************************
//                                      Tournament routes                                             *
// ********************************************************************************************************

router.post("/addtournament",isLoggedin , isAdmin , addTournament); 
router.get("/getalltournaments",getAllTournament) 
router.get("/gettournamentforuser",isLoggedin,isAdmin,getTournamentForUser);
router.post("/addteam",isLoggedin,isAdmin,addTeam);
router.get("/myteams",isLoggedin,isAdmin,getMyTeams);
router.post("/addplayer",isLoggedin,isAdmin, addPlayer );
router.get("/findmyplayer",isLoggedin,isAdmin,findPlayer);
router.post("/addmatch",isLoggedin,isAdmin,addMatch);
router.get("/findmatch" , isLoggedin , isAdmin , findMyMatch);
router.get("/getallmatches",getAllMatches);    
router.get("/getmymatches",getMyMatches);
router.get("/findtotalplayer" , findTotalPLayer);
router.post("/addplaying11",isLoggedin,isAdmin , addPlaying); 



module.exports = router

 