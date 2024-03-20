const { v4: uuidv4 } = require('uuid');
const addTournamentMode = require('../model/tournament');
require("dotenv").config();

const addTournament = async (req, res) => {
  try {
    const {
      tournamentName,
      cityName,
      mobileNumber,
      organiserName,
      startDate,
      lastDate,
    } = req.body;

    const registredUser = await addTournamentMode.create({
      tournamentName,
      cityName,
      mobileNumber,
      organiserName,
      startDate,
      lastDate,
      ownerEmail:req.user.email,
      userId:req.user._id
    });

    return res.json({
      success: true,
      msg:"Tournament Created"
    });
  } catch (error) {
    return  res.json({
      success: false,
      msg:"Something Went Wrong"
    });
  }
};

const getTournamentForUser = async(req,res)=>{
  try{
    const email = req.user.email;
    const data = await addTournamentMode.find({ownerEmail:email});
    res.json({
      success:true,
      msg:"Data Sent",
      result:data
    })
  }catch(error){
    return  res.json({
      success: false,
      msg:"Something Went Wrong"
    });
  }
}


const getAllTournament = async (req, res) => {
  try {
    const allTournament = await addTournamentMode.find({},{
      mobileNumber: 0,
      ownerEmail:0,
      userId:0,
      teams:0,
      matches:0,
      _id:1
    });
    console.log(allTournament)
    return res.json({
      success: true,
      msg:"Data Sent",
      result:allTournament
    });
  } catch (error) {
    return  res.json({
      success: false,
      msg:"Something Went Wrong"
    });
  }
};

module.exports = { addTournament  , getAllTournament , getTournamentForUser};
