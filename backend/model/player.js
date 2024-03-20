const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
playerName:{
    type:String,
    require:true
},
playerNumber:{
    type:String,
    require:true
},
team:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"team"
},
tournament:{
    type:mongoose.Schema.Types.ObjectId,
    require:true,
    ref:"tournament"
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

module.exports = mongoose.model('player',playerSchema);