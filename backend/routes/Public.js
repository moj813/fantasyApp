const express = require("express")
const router = express.Router()

const { getMyMatches} = require("../controller/match");
const {findScoreByID , findScoreAndMatch} = require("../controller/score")


// ********************************************************************************************************
//                                      Tournament routes                                             *
// ********************************************************************************************************



router.get("/matches",getMyMatches);
router.get("/findscorebyid",findScoreByID);
router.get("/scoredetails" , findScoreAndMatch);
  



module.exports = router


