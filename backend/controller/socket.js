const socketIo = require("socket.io");
const scoreModel = require("../model/score");

const setupSocketLogic = (io) => {
  io.on("connection", (socket) => {
    console.log("Client connected", socket.id);

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

    socket.on("update1", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        //Update TotalRun By 1 --checked
        //Update TotalBall By 1 --checked
        //Update Scored of Inning by 1 --checked
        //Update totalrun and BallPlayed By 1 of Striker --checked
        //Upadte runGiven by 1 of Bowler --checked
        //Swap Striker --checked
        //IF current Ball equal to 5 update Current Ball to 0 and Increase Current Over by 1 --checked
        // console.log("PLayer that Hit the ball" , score[score.currentBattingTeam.teamID][score.currentStrikerID])

        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentRun: 1,
              currentBall: 1,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalRun`]: 1,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 1,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $set: {
              currentStrikerID: currentNonStrikerID,
              currentNonStrikerID: currentStrikerID,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"normal"
              }
            },
          },
          { new: true }
        );

        if(score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }

        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    socket.on("update0", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        //Update TotalBall By 1 --checked
        //Update BallPlayed By 1 of Striker --checked
        //Upadte totalBallThrown by 1 of Bowler --checked
        //IF current Ball equal to 5 update Current Ball to 0 and Increase Current Over by 1 --checked
        // console.log("PLayer that Hit the ball" , score[score.currentBattingTeam.teamID][score.currentStrikerID])

        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentBall: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push: {
              over: {
                runScored: 0,
                ballType: 0,
              },
            },
          },
          { new: true }
        );

        if(score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }


        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    socket.on("update2", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        //Update TotalBall By 2 --checked
        //Update BallPlayed By 1 of Striker --checked
        //Upadte totalBallThrown by 1 of Bowler --checked
        //IF current Ball equal to 5 update Current Ball to 0 and Increase Current Over by 1 --checked
        // console.log("PLayer that Hit the ball" , score[score.currentBattingTeam.teamID][score.currentStrikerID])

        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentBall: 1,
              currentRun: 2,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 2,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalRun`]: 2,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 2,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"normal"
              }
            },
          },
          { new: true }
        );

        if(score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }

        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    socket.on("update3", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        //Update TotalRun By 3 --checked
        //Update TotalBall By 1 --checked
        //Update Scored of Inning by 3 --checked
        //Update totalrun by 3 and BallPlayed By 1 of Striker --checked
        //Upadte runGiven by 3 of Bowler --checked
        //Swap Striker --checked
        //IF current Ball equal to 5 update Current Ball to 0 and Increase Current Over by 1 --checked
        // console.log("PLayer that Hit the ball" , score[score.currentBattingTeam.teamID][score.currentStrikerID])

        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentRun: 3,
              currentBall: 1,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 3,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalRun`]: 3,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 3,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $set: {
              currentStrikerID: currentNonStrikerID,
              currentNonStrikerID: currentStrikerID,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"normal"
              }
            },
          },
          { new: true }
        );

        if(score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }

        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    socket.on("update4", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentBall: 1,
              currentRun: 4,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 4,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalRun`]: 4,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 4,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"normal"
              }
            },
          },
          { new: true }
        );

        if(score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }

        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    socket.on("update6", async (score) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = score;
      try {
        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentBall: 1,
              currentRun: 6,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 6,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalBallPlayed`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.total6`]: 1,
              [`${score.currentBattingTeam.teamID}.${score.currentStrikerID}.totalRun`]: 6,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 6,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"normal"
              }
            },  
          },
          { new: true }
        );
          if(score.currentBall===5){
            console.log("IF Executerd")
            io.to(score._id).emit("6ballCompleate", updatedMatch);
          }
        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(score._id).emit(score);
      }
    });

    //Chnage Over

    socket.on("changeOver", async (data) => {
      console.log("RunUpdated");
      const { currentStrikerID, currentNonStrikerID, currentBowlerID } = data.score;
      try {
        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          data.score._id,
          {
            $inc: {
              currentOver: 1,
              [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalOver`]: 1,
            },
            $set:{
              "over":[],
              currentStrikerID: currentNonStrikerID,
              currentNonStrikerID: currentStrikerID,
              currentBowlerID:data.bowlerID,
              currentBall:0,
            },  
          },
          { new: true }
        );

        io.to(data.score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);
      } catch (error) {
        console.log(error);
        io.to(data.score._id).emit(data.score);
      }
    });

    //Update Wide Ball

    socket.on("wide",async (score)=>{
      try{

        let updatedMatch;

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentRun: 1,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: 1,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: 1,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"wide"
              }
            },  
          },
          { new: true }
        );
          
        io.to(score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);

      }catch(err){
        console.log(error);
        io.to(data.score._id).emit(data.score);
      }
    })


    socket.on("noBall",async (data)=>{
      try{
        console.log(data.run)
        let updatedMatch;
        updatedMatch = await scoreModel.findByIdAndUpdate(
          data.score._id,
          {
            $inc: {
              currentRun: data.run,
              [`${data.score.currentInning}.${data.score.currentBattingTeam.teamID}.scored`]: data.run,
              [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalRunGiven`]: data.run,
              [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:data.run,
                  ballType:"noBall"
              }
            },  
          },
          { new: true }
        );
         
        io.to(data.score._id).emit("scoreUpdated", updatedMatch);
      }catch(err){
        console.log(err);
        io.to(data.score._id).emit(data.score);
      }
    })

    socket.on("undo",async (score)=>{

      try{
        let updatedMatch;
        const lastEntry = score.over[score.over.length - 1];
        console.log(lastEntry);

        //Reverse Run , RunGiven By Baller and remove the current Entry OF Ball
        if(lastEntry.ballType==='noBall'){

        updatedMatch = await scoreModel.findByIdAndUpdate(
          score._id,
          {
            $inc: {
              currentRun: -lastEntry.runScored,
              [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: -lastEntry.runScored,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: -lastEntry.runScored,
              [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: -1,
            },
            $pop:{
              "over":1
            },  
          },
          { new: true }
        );
          
        return io.to(score._id).emit("scoreUpdated", updatedMatch);
        } 


        //Decrese run by 1 for Current , runGiven
        if(lastEntry.ballType==='wide'){

          updatedMatch = await scoreModel.findByIdAndUpdate(
            score._id,
            {
              $inc: {
                currentRun: -1,
                [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: -1,
                [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: -1,
                [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: -1,
              },
              $pop:{
                "over":1
              },  
            },
            { new: true }
          );
            
          return io.to(score._id).emit("scoreUpdated", updatedMatch);
          } 

          //Decrease Run scored , for Batsman, Bowler, total , chnage Striker , decrease Total Ball By 1
          if(lastEntry.ballType==='normal'){

            // updatedMatch = await scoreModel.findByIdAndUpdate(
            //   score._id,
            //   {
            //     $inc: {
            //       currentRun: -lastEntry.runScored,
            //       [`${score.currentInning}.${score.currentBattingTeam.teamID}.scored`]: -lastEntry.runScored,
            //       [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalRunGiven`]: -lastEntry.runScored,
            //       [`${score.currentBowlingTeam.teamID}.${score.currentBowlerID}.totalBallThrown`]: -1,
            //     },
            //     $pop:{
            //       "over":1
            //     },  
            //   },
            //   { new: true }
            // );
              
            // return io.to(score._id).emit("scoreUpdated", updatedMatch);
            } 
        // console.log(updatedMatch);

      }catch(err){
        console.log(err);
        io.to(score._id).emit(score);
      }

    })


    socket.on("byeball",async (data)=>{
      try{
        console.log(data)
        //handle 2case Strike changed or not changhed
        //if run odd then change strike
        if(data.run%2===0){
         
          const updatedMatch = await scoreModel.findByIdAndUpdate(
            data.score._id,
            {
              $inc: {
                currentRun: data.run,
                currentBall:1,
                [`${data.score.currentInning}.${data.score.currentBattingTeam.teamID}.scored`]: data.run,
                [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalBallThrown`]: 1,
              },
              $push:{
                "over":{
                    runScored:data.run,
                    ballType:"normal"
                }
              },  
            },
            { new: true }
          );
  
          return io.to(data.score._id).emit("scoreUpdated", updatedMatch);
        }

        if(data.run%2!==0){
          const updatedMatch = await scoreModel.findByIdAndUpdate(
            data.score._id,
            {
              $inc: {
                currentRun: data.run,
                currentBall:1,
                [`${data.score.currentInning}.${data.score.currentBattingTeam.teamID}.scored`]: data.run,
                [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalBallThrown`]: 1,
              },
              $push:{
                "over":{
                    runScored:data.run,
                    ballType:"normal"
                }
              },  
              $set:{
                currentStrikerID: data.score.currentNonStrikerID,
                currentNonStrikerID: data.score.currentStrikerID,
              },  
            },
            { new: true }
          );
            console.log(updatedMatch)
          return io.to(data.score._id).emit("scoreUpdated", updatedMatch);
        }

      }catch(err){
        console.log(err);
        io.to(data.score._id).emit(data.score);
      }
    })



    socket.on("caughtOut",async (data)=>{
      try{

        let updatedMatch;

        const stage1 = await scoreModel.findByIdAndUpdate(
          data.score._id,
          {
            $inc: {
              currentWicket:1,
              [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalWicket`]: 1,
              [`${data.score.currentBowlingTeam.teamID}.${data.score.currentBowlerID}.totalBallThrown`]: 1,
            },
            $push:{
              "over":{
                  runScored:0,
                  ballType:"wicket"
              }
            },
            $set:{
              [`${data.score.currentBattingTeam.teamID}.${data.score.currentStrikerID}.isOut`]: true,
            }
          },
          { new: true }
        );

        updatedMatch = await scoreModel.findByIdAndUpdate(
          data.score._id,
          {
            $set:{
              currentStrikerID:data.newPlayer,
            }
          },
          { new: true }
        )

        if(data.score.currentBall===5){
          console.log("IF Executerd")
          io.to(score._id).emit("6ballCompleate", updatedMatch);
        }

        io.to(data.score._id).emit("scoreUpdated", updatedMatch);
        console.log(updatedMatch);

      }catch(err){

        console.log(err);
        io.to(data.score._id).emit(data.score);

      }
    })


    // Handle user joining room
    socket.on("joinRoom", (userId) => {
      socket.join(userId);
      console.log("Joined Room", userId);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected", socket.id);
    });
  });
};

module.exports = { setupSocketLogic };
