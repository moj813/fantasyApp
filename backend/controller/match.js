const { responsiveFontSizes } = require("@mui/material");
const matchModel = require("../model/match");

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

    const newTime = new Date(date + "T" + time);

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
      matchTime: newTime,
      createdByEmail: req.user.email,
      createdByID: req.user._id,
    });

    return res.json({
      success: true,
      msg: "Match Registred",
    });
    
  } catch (error) {
    return res.json({
      success: false,
      msg: "Match Not Registred",
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
    const teamAPlayingIds = teamAPlaying.map(player => player.id);
    const teamBPlayingIds = teamBPlaying.map(player => player.id);

    const response = await matchModel.findByIdAndUpdate(matchID , { teamAplaying: teamAPlayingIds, teamBplaying: teamBPlayingIds });
    console.log(response)
    return res.json({
      success: true,
      msg: "Working",
    });
  }catch(err){
    console.log(err)
    return res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });
  }
}


module.exports = { addMatch, getAllMatches, getMyMatches , addPlaying };
