const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
  matchID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  currentInning:{
    type:String,
    default:"inning1",
  },
  currentRun: {
    type: Number,
    default: 0,
  },
  currentOver: {
    type: Number,
    default: 0,
  },
  currentBall: {
    type: Number,
    default: 0,
  },
  currentWicket: {
    type: Number,
    default: 0,
  },
  currentBallID: {
    type: String,
    required: true,
  },
  currentBattingTeam: {
    teamID:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
     },
     teamName:{
      type: String,
      required: true,
     }
  },
  currentBowlingTeam:{
    teamID:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
     },
     teamName:{
      type: String,
      required: true,
     }
  },
  currentStrikerID: {
    type: mongoose.Schema.Types.ObjectId,
    default:null,
  },
  currentNonStrikerID: {
    type: mongoose.Schema.Types.ObjectId,
    default:null,
  },
  currentBowlerID: {
    type: mongoose.Schema.Types.ObjectId,
    default:null,
  },
  over: {
    type: Map,
    of: new mongoose.Schema({
      runScored: {
        type: Number,
        required: true,
        default:null,
      },
      ballType:{
        type:String,
        default:"normal"
      }
    }),
  },
  inning1: {
    battingTeamID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    bowlingTeamID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    scored: {
      type: Number,
      default: 0,
    },
  },
  inning2: {
    battingTeamID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    bowlingTeamID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    scored: {
      type: Number,
      default: 0,
    },
  },
  team1Player: {
    type: Map,
    of: [new mongoose.Schema({
      playerName: {
        type: String,
        required: true,
      },
      totalRun: {
        type: Number,
        default: 0,
      },
      total4: {
        type: Number,
        default: 0,
      },
      total6: {
        type: Number,
        default: 0,
      },
      totalBallPlayed: {
        type: Number,
        default: 0,
      },
      totalRunGiven:{
        type: Number,
        default: 0,
      },
      totalBallThrown:{
        type: Number,
        default: 0,
      },
      totalWicket: {
        type: Number,
        default: 0,
      },
      totalCaught: {
        type: Number,
        default: 0,
      },
      totalOver: {
        type: Number,
        default: 0,
      },
      isOut:{
        type:Boolean,
        default:false
      }
    })],
  },
  team2Player: {
    type: Map,
    of: [new mongoose.Schema({
      playerName: {
        type: String,
        required: true,
      },
      totalRun: {
        type: Number,
        default: 0,
      },
      total4: {
        type: Number,
        default: 0,
      },
      total6: {
        type: Number,
        default: 0,
      },
      totalBallPlayed: {
        type: Number,
        default: 0,
      },
      totalRunGiven:{
        type: Number,
        default: 0,
      },
      totalWicket: {
        type: Number,
        default: 0,
      },
      totalCaught: {
        type: Number,
        default: 0,
      },
      totalOver: {
        type: Number,
        default: 0,
      },
      isOut:{
        type:Boolean,
        default:false
      }
    })],
  },
}, { strict: false });

module.exports = mongoose.model("score", scoreSchema);
