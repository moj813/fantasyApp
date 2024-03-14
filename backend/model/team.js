const mongoose = require('mongoose');

const addTeamSchema = mongoose.Schema({
teamName:{
    type:String,
    require:true
},
cityName:{
    type:String,
    require:true
},
captainName:{
    type:String,
    require:true
},
tournamentId:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"tournament"
},
player:[
    {
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }
],
matchesPlayed:[
    {
        type: mongoose.Schema.Types.ObjectId,
        default:[]
    }
],
createdByEmail:{
    type:String,
    require:true
},
createdByID:{
    type: mongoose.Schema.Types.ObjectId,
    require:true
}
});

module.exports = mongoose.model('team',addTeamSchema);