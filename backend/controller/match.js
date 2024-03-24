const matchModel = require("../model/match");
const moment = require("moment-timezone");

const addMatch = async (req, res) => {
  try {
    const {
      teamAID,
      teamBID,
      teamAName,
      teamBName,
      noOfOvers,
      oversPerBowler,
      city,
      ground,
      date,
      time,
      tournamentID,
    } = req.body;
    if (
      !teamAID ||
      !teamAName ||
      !teamBID ||
      !teamBName ||
      !noOfOvers ||
      !oversPerBowler ||
      !city ||
      !ground ||
      !date ||
      !time ||
      !tournamentID
    ) {
      return res.json({
        success: false,
        msg: "All Field Required",
      });
    }
  
    // Combine date and time strings into a single datetime string
    const dateTimeString = `${date}T${time}`;
  
    // Set the timezone to Indian Standard Time (IST)
    const newTime = moment.tz(dateTimeString, "Asia/Kolkata");

    const response = await matchModel.create({
      teamAName: teamAName,
      teamBName: teamBName,
      teamAID: teamAID,
      teamBID: teamBID,
      noOfOvers: noOfOvers,
      oversPerBowler: oversPerBowler,
      city: city,
      ground: ground,
      tournamentID: tournamentID,
      matchTime: newTime.toDate(), // Convert moment object to JavaScript Date object
      createdByEmail: req.user.email,
      createdByID: req.user._id,
    });
  
    return res.json({
      success: true,
      msg: "Match Registered",
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Match Not Registered",
    });
  }
};

const getAllMatches = async (req, res) => {
  try {
    const response = await matchModel.find({});

    return res.send({
      success: true,
      data: response,
      msg: "Data Fetched",
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });
  }
};

const getMyMatches = async (req, res) => {
  try {
    const { tournamentid } = req.query;
    if (!tournamentid) {
      return res.send({
        success: false,
        msg: "TournamentID Missing",
      });
    }
    const response = await matchModel.find({ tournamentID: tournamentid });
    
    return res.send({
      success: true,
      data: response,
      msg: "Data Fetched",
    });
  } catch (error) {
    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });
  }
};

const addPlaying = async (req,res)=>{
  
  try{
    const {matchID,teamAPlaying, teamBPlaying} = req.body;
    
    if(!matchID || teamAPlaying.length===0 || teamBPlaying===0){
      return res.json({
        success: false,
        msg: "Filed Missing",
      });
    }

    const teamAPlayingData = teamAPlaying.map(player => ({ id: player.id, playerName: player.name }));
    const teamBPlayingData = teamBPlaying.map(player => ({ id: player.id, playerName: player.name }));



    const response = await matchModel.findByIdAndUpdate(matchID , { teamAplaying: teamAPlayingData, teamBplaying: teamBPlayingData });

    return res.json({
      success: true,
      msg: "Working",
    });

  }catch(err){

    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });
  }
}


const findMyMatch = async (req,res)=>{
  try{
   
    const { matchid } = req.query;
   
    if (!matchid) {
      return res.send({
        success: false,
        msg: "TournamentID Missing",
      });
    }

    const response = await matchModel.findOne({_id:matchid});
    
    return res.send({
      success: true,
      data: response,
      msg: "Data Fetched",
    });

  }catch(error){

    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });
  }
}


module.exports = { addMatch, getAllMatches, getMyMatches , addPlaying  , findMyMatch };
