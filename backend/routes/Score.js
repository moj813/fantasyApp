const express = require("express")
const router = express.Router()

const {updateStage , updateToss, findScoreByID, setIntialPLayer} = require("../controller/score");



// ********************************************************************************************************
//                                      Score routes                                             *
// ********************************************************************************************************



router.post("/updatestage",updateStage);  
router.post('/updatetossresult',updateToss);
router.get("/findscore",findScoreByID);
router.post("/setinitialplayer" , setIntialPLayer)

module.exports = router