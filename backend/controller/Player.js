const playerModel = require("../model/player");
const teamModel = require('../model/team');

const addPlayer = async (req,res)=>{
    try{

        const { name , number , tournamentID , teamID} = req.body;

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

        res.json({
            success:true,
            msg:"Player Added"
        })

    }catch(err){

        res.json({
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

        res.json({
            success:true,
            data:response,
            msg:"Player Fetched"
        })

    }catch(error){
    
        res.json({
            success:false,
            msg:"Server Error"
        })

    }
};

module.exports = {addPlayer , findPlayer};