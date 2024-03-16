const express = require("express")
const router = express.Router()

const { getMyMatches} = require("../controller/match");


// ********************************************************************************************************
//                                      Tournament routes                                             *
// ********************************************************************************************************



router.get("/matches",getMyMatches);  



module.exports = router


