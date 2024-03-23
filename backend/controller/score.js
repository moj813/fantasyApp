const matchModel = require("../model/match");
const scoreModel = require("../model/score");



const updateStage = async (req,res)=>{
    try{
      const {matchID,stage} = req.body;
      if(!matchID || !stage){
        return res.json({
          success: false,
          msg: "Filed Missing",
        });
      }

      const response = await matchModel.findByIdAndUpdate(matchID , { stage:stage },{new:true});

      return res.send({
        success: true,
        data: response,
        msg: "Data Fetched",
      });
    }catch(err){

      return res.json({
        success: false,
        msg: "Can't Fetch the Data",
      });

    }
  }

  const updateToss = async (req,res)=>{
    try{


        const {matchID,tossWinner , tossDecision , battingTeam , bowlingTeam} = req.body;


        const scoreResponse = await scoreModel.create({
          matchID,
          currentInning:"inning1",
          currentRun:0,
          currentOver:0,
          currentBall:0,
          currentWicket:0,
          currentBallID:0,
          currentBattingTeam:battingTeam,
          currentBowlingTeam:bowlingTeam,
          inning1:{
            battingTeamID: battingTeam.teamID,
            bowlingTeamID: bowlingTeam.teamID,
          },
          inning2:{
            battingTeamID: bowlingTeam.teamID,
            bowlingTeamID: battingTeam.teamID,
          },
          [battingTeam.teamID]:[],
          [bowlingTeam.teamID]:[],
        });


        const update = {
            tossWinner:{
                teamID : tossWinner[0],
                teamName : tossWinner[1],
                elected : tossDecision
            },
            tossString:`${tossWinner[1]} won the toss and elected for ${tossDecision}`,
            stage:2,
            status:"Live",
        }

        const matchDetails = await matchModel.findByIdAndUpdate(matchID , update,{new:true});

// Transform teamAplaying array into an object where player IDs become keys
const teamAPlayerObject = matchDetails.teamAplaying.reduce((acc, player) => {
  acc[player._id] = {
    playerName: player.playerName,
    totalRun: 0, 
    totalWicket: 0,
    totalCaught: 0,
    totalOver: 0,
    isOut: false,
  };
  return acc;
}, {});


const teamBPlayerObject = matchDetails.teamBplaying.reduce((acc, player) => {
  acc[player._id] = {
    playerName: player.playerName,
    totalRun: 0, // Initialize with default values
    totalWicket: 0,
    totalCaught: 0,
    totalOver: 0,
    isOut: false,
  };
  return acc;
}, {});




const scoreData = await scoreModel.findOneAndUpdate(
  { matchID: matchID },
  {
    $set: {
      [battingTeam.teamID]: teamAPlayerObject,
      [bowlingTeam.teamID]: teamBPlayerObject
    }
  },
  {new:true}
);


const match = await matchModel.findByIdAndUpdate(matchID , {scoreID:scoreData._id},{new:true});

        return res.send({
            success: true,
            score:scoreData,
            match:match,
            msg: "Data Fetched",
          });

    }catch(err){

      return res.json({
        success: false,
        msg: "Can't Fetch the Data",
      });

    }
  }

const findScoreByID =async (req,res)=>{
  try{

    const {scoreid} = req.query;

    if(!scoreid){
      return res.json({
        success: false,
        msg: "Filed Missing",
      });
    }

    const score = await scoreModel.findById(scoreid);

    return res.send({
      success: true,
      score:score,
      msg: "Data Fetched",
    });

  }catch(error){

    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });

  }
}
const setIntialPLayer = async(req,res)=>{
  try{
    const {matchID ,scoreID , striker , nonStriker , bowler} = req.body;

    if(!scoreID || !striker || !nonStriker || !bowler){
      return res.json({
        success: false,
        msg: "Filed Missing",
      });
    }

    const response = await scoreModel.findOneAndUpdate({_id:scoreID} , {currentStrikerID:striker , currentNonStrikerID:nonStriker , currentBowlerID:bowler} ,{new:true});
    const response2 = await matchModel.findByIdAndUpdate({_id:matchID} , {stage:3},{new:true});
    return res.json({
      success: true,
      msg: "Succefull",
      match:response2,
      score:response
    });

  }catch(error){
    console.log(error)
    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });

  }
}
  module.exports = {updateStage , updateToss ,findScoreByID , setIntialPLayer};