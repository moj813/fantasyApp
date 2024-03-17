const playerModel = require("../model/player");
const teamModel = require('../model/team');
const matchModel = require("../model/match")

const addPlayer = async (req,res)=>{
    try{

        const { name , number , tournamentID , teamID} = req.body;
        if(!name || !number || !tournamentID || !teamID){
            return res.json({
                success:false,
                msg:"Some Info Missin"
            })
        }
        const playerResponse = await playerModel.create({
            playerName:name,
            playerNumber:number,
            team:teamID,
            tournament:tournamentID,
            createdByEmail:req.user.email,
            createdByID:req.user._id
        })

        const updatedTeam = await teamModel.findByIdAndUpdate(
            teamID,
            { $push: { player: playerResponse._id } },
            { new: true }
          );

          return res.json({
            success:true,
            msg:"Player Added"
        })

    }catch(err){

        return res.json({
            success:false,
            msg:"Server Error"
        })

    }
}

const findPlayer = async (req,res)=>{
    try{
       
        const { teamID } = req.query;
        console.log(teamID)
        
            if(!teamID){
                return res.json({
                    success:false,
                    msg:"Id Not Found"
                })
            }

            const response = await playerModel.find({team:teamID});
            console.log(response);

        return res.json({
            success:true,
            data:response,
            msg:"Player Fetched"
        })

    }catch(error){
    
       return res.json({
            success:false,
            msg:"Server Error"
        })

    }
};


const findTotalPLayer = async (req,res)=>{
    try{
        const { matchid } = req.query;
        console.log(matchid)
        if(!matchid){
            return res.json({
                success:false,
                msg:"MatchId Not Found"
            })
        }


        //First Get Id of Both Team
        let matchDetails = null;
        try{
            matchDetails = await matchModel.findById(matchid);
            console.log(matchDetails)

             //Find All player For TeamA
             const matchAPlayer = await teamModel.findById(matchDetails.teamAID);
             const teamAplayers = await playerModel.find({ _id: { $in: matchAPlayer.player } });

             //Find All player For TeamB
             const matchBPlayer = await teamModel.findById(matchDetails.teamBID);
             const teamBplayers = await playerModel.find({ _id: { $in: matchBPlayer.player } });
             return res.json({
                success:true,
                msg:"Players Found",
                teamAplayers,
                teamBplayers
            })
            
        }catch(err){
            console.log(err)
            return res.json({
                success:false,
                msg:"Match Not Found"
            })
        }
       
       
    }catch(error){
        console.log(error)
        return res.json({
            success:false,
            msg:"Server Error"
        })
    }
}

module.exports = {addPlayer , findPlayer , findTotalPLayer};