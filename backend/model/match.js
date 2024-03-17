const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    teamAName:{
        type:String,
        require:true
    },
    teamBName:{
        type:String,
        require:true
    },
    teamAID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"team"
    },
    teamBID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"team"
    },
    teamAplaying:[{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"player"
    }],
    teamBplaying:[{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"player"
    }],
    noOfOvers:{
        type:Number,
        require:true
    },
    oversPerBowler:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    ground:{
        type:String,
        require:true
    },
    tournamentID:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"tournament"
    },
    matchTime:{
        type:Date,
        require:true,
    },
    createdByEmail:{
        type:String,
        require:true
    },
    createdByID:{
        type: mongoose.Schema.Types.ObjectId,
        require:true
    }
});

module.exports = mongoose.model('match',matchSchema);