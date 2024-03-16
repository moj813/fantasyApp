const matchModel = require('../model/match');

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
      date,time,
      tournamentID,
    } = req.body;

    console.log(teamAID,
        teamBID,
        teamAName,
        teamBName,
        noOfOvers,
        oversPerBowler,
        city,
        ground,
        date,time,
        tournamentID);

        const newTime = new Date(date + 'T' + time);
        const response = await matchModel.create({
        teamAName:teamAName,
        teamBName:teamBName,
        teamAID:teamAID,
        teamBID:teamBID,
        noOfOvers:noOfOvers,
        oversPerBowler:oversPerBowler,
        city:city,
        ground:ground,
        tournamentID:tournamentID,
        matchTime:newTime,
        createdByEmail:req.user.email,
        createdByID:req.user._id
        });
        console.log(response);
    res.json({
        success:true,
        msg:"Match Registred"
    })

  } catch (error) {
    res.json({
        success:false,
        msg:"Match Not Registred"
    })
  }
};

const getAllMatches = async (req, res) => {
  try {
    const response = await matchModel.find({});

    res.send({
        success:true,
        data:response,
        msg:"Data Fetched"
    })

  } catch (error) {

    res.json({
      success: false,
      msg: "Can't Fetch the Data",
    });

  }
};


const getMyMatches = async (req,res)=>{

    try{
        const {tournamentid} = req.query;
       if(!tournamentid){
        res.send({
            success:false,
            msg:"TournamentID Missing"
        })
       }
        const response = await matchModel.find({tournamentID:tournamentid});
        console.log(response)

        res.send({
            success:true,
            data:response,
            msg:"Data Fetched"
        })


    }catch(error){

        res.json({
            success: false,
            msg: "Can't Fetch the Data",
          });
    }
}

module.exports = { addMatch ,getAllMatches,getMyMatches };
