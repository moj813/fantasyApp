const mongoose = require('mongoose');

const addTournamentSchema = mongoose.Schema({
tournamentName:{
    type:String,
    require:true
},
cityName:{
    type:String,
    require:true
},
mobileNumber:{
    type:Number,
    require:true
},
organiserName:{
    type:String,
    require:true
},
startDate:{
    type:Date,
    require:true
},
lastDate:{
    type:Date,
    require:true
},
ownerEmail:{
    type:String,
    require:true
},
userId:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
},
teams:[
    {
        type:mongoose.Schema.Types.ObjectId,
        default:[]
    }
],
matches:[
    {
        type: mongoose.Schema.Types.ObjectId,
        default:[]
    }
],
});

module.exports = mongoose.model('tournament',addTournamentSchema);