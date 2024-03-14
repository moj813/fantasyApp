const addTeamModel = require("../model/team");
const addTournamentModel = require("../model/tournament");
require("dotenv").config();

const addTeam = async (req, res) => {
  try {
    
    const { teamName, cityName, tournamentId } = req.body;

    const registredUser = await addTeamModel.create({
      teamName,
      cityName,
      tournamentId: tournamentId,
      createdByID: tournamentId,
      createdByEmail: req.user.email,
      createdByID: req.user._id,
    });

    const updatedTournament = await addTournamentModel.findByIdAndUpdate(
      tournamentId,
      { $push: { teams: registredUser._id } },
      { new: true }
    );

    return res.json({
      success: true,
      msg: "Team Added",
    });

  } catch (error) {

    console.log(error);
    return res.json({
      success: false,
      msg: "Something Went Wrong",
    });

  }
};

const getMyTeams = async (req, res) => {
  try {

    const { tournamentId } = req.query;
    const data = await addTeamModel.find({ tournamentId : tournamentId });

    res.json({
      success: true,
      msg: "Data Sent",
      result: data,
    });

  } catch (error) {

    return res.json({
      success: false,
      msg: "Something Went Wrong",

    });
  }
};

module.exports = { addTeam, getMyTeams };
