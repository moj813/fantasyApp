const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamAName: {
    type: String,
    require: true,
  },
  teamBName: {
    type: String,
    require: true,
  },
  teamAID: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "team",
  },
  teamBID: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "team",
  },
  scoreID:{
    type: mongoose.Schema.Types.ObjectId,
  },
  teamAplaying: [
    {
      playerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player", // Assuming "player" is the name of the model for players
      },
      playerName: {
        type: String,
      },
    },
  ],
  teamBplaying: [
    {
      playerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "player", // Assuming "player" is the name of the model for players
      },
      playerName: {
        type: String,
      },
    },
  ],
  noOfOvers: {
    type: Number,
    require: true,
  },
  oversPerBowler: {
    type: Number,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  ground: {
    type: String,
    require: true,
  },
  tournamentID: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "tournament",
  },
  matchTime: {
    type: Date,
    require: true,
  },
  stage: {
    type: Number,
    default: 0,
  },
  tossWinner: {
    teamID: {
      type: mongoose.Schema.Types.ObjectId,
    },
    teamName: {
      type: String,
      default: "",
    },
    elected: {
      type: String,
      enum: ["Batting", "Bowling"],
    },
  },
  tossString: {
    type: String,
    default: "",
  },
  finalResult: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Upcoming", "Live", "Completed"],
    default: "Upcoming",
  },
  createdByEmail: {
    type: String,
    require: true,
  },
  createdByID: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
  },
});

module.exports = mongoose.model("match", matchSchema);
