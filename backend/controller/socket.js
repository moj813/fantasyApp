const socketIo = require('socket.io');
const scoreModel = require("../model/score")

const setupSocketLogic = (io) => {
  

  io.on("connection", (socket) => {

    console.log("Client connected"  , socket.id);

    // Handle admin changes
    socket.on("changeName", async (userId, newName) => {
     // await User.findByIdAndUpdate(userId, { name: newName });
      //io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    socket.on("changeEmail", async (userId, newEmail) => {
      //await User.findByIdAndUpdate(userId, { email: newEmail });
      //io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    socket.on("changeNumber", async (userId, newNumber) => {
     // await User.findByIdAndUpdate(userId, { number: newNumber });
     // io.to(userId).emit("dataUpdated", await User.findById(userId));
    });

    socket.on("update1",async (score)=>{
      console.log("RunUpdated")
     try{
      const updatedMatch = await scoreModel.findByIdAndUpdate(
        score._id,
        {
            $inc: {
                currentRun: 1,
                currentBall: 1
            }
        },
        { new: true }
    );

    // // Swap currentStrikerID and currentNonStrikerID
    // [updatedMatch.currentStrikerID, updatedMatch.currentNonStrikerID] = [updatedMatch.currentNonStrikerID, updatedMatch.currentStrikerID];

    // // Increment totalRun for the new striker
    // updatedMatch[updatedMatch.currentBattingTeam.teamID][updatedMatch.currentStrikerID].totalRun += 1;

    // // Increment totalRunGiven for the current bowler
    // updatedMatch[updatedMatch.currentBowlingTeam.teamID][updatedMatch.currentBowlerID].totalRunGiven += 1;

    // // Add current ball stats to the overs array
    // // updatedMatch[currentInning].overs.push(currentBallStats);

    // // Save the updated match data
    // await updatedMatch.save();

    io.to(score._id).emit("scoreUpdated",updatedMatch);
    console.log(updatedMatch)
     }catch(error){
      io.to(score._id).emit(score);
     }
    })
    // Handle user joining room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log("Joined Room" , userId)
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected" , socket.id);
    });
  });
};

module.exports = {setupSocketLogic};