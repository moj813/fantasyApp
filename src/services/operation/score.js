import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { setLoadingAtMatch, setMatch , setScore } from "../../slices/matchScore";


export function updateStage(matchID, stage) {
  return async (dispatch) => {
    try {
      setLoadingAtMatch(true);
      const response = await apiConnector(
        "POST",
        `http://localhost:4000/admin/score/updatestage`,
        { matchID, stage }
      );

      if (!response.data.success) {
        setLoadingAtMatch(false);
        throw new Error(response.data.msg);
      }

      if (response.data.success) {
        console.log(response.data.data);
        dispatch(setMatch(response.data.data));
      }
      setLoadingAtMatch(false);
    } catch (error) {
      setLoadingAtMatch(false);
      toast.error("Couldn't update");
    }
  };
}

export function updateTossResult(matchID, tossWinner,tossDecision, battingTeam , bowlingTeam) {
  return async (dispatch) => {
    try {
      console.log("Batting team" , battingTeam);
      console.log("Bowling team" , bowlingTeam);
      setLoadingAtMatch(true);
      const response = await apiConnector(
        "POST",
        `http://localhost:4000/admin/score/updatetossresult`,
        { matchID,tossWinner, tossDecision , battingTeam , bowlingTeam }
      );
      if (!response.data.success) {
        setLoadingAtMatch(false);
        throw new Error(response.data.msg);
      }

      if (response.data.success) {
        console.log(response.data.score);
        console.log(response.data.match);
        dispatch(setMatch(response.data.match));
        dispatch(setScore(response.data.score));
        
      }
      setLoadingAtMatch(false);
    } catch (error) {
      setLoadingAtMatch(false);
      toast.error("Couldn't update");
    }
  };
}


export function findScore(scoreID , match , setLoading , setBattingPlayer , setBowlingPlayer){
return async (dispatch)=>{
  setLoading(true);
  try{
      const response = await apiConnector(
        "GET",
        `http://localhost:4000/admin/score/findscore?scoreid=${scoreID}`
      );
      if (!response.data.success) {
        throw new Error(response.data.msg);
      }

      if (response.data.success) {
        console.log(response.data.score);
        dispatch(setScore(response.data.score));
        setBowlingPlayer(response.data.score[response.data.score.currentBowlingTeam.teamID])
        setBattingPlayer(response.data.score[response.data.score.currentBattingTeam.teamID])
      }
      
  }catch(error){
    toast.error("Can't Find Score Details");
  }
  setLoading(false);
}
}


export function setIntialPLayer(matchID,scoreID , striker, nonStriker,bowler , navigate){
  return async (dispatch)=>{
    const toastID = toast.loading("Loading..");
  try{
    console.log("Function Called");
    console.log(scoreID , striker , nonStriker , bowler)
    const response = await apiConnector(
      "POST",
      `http://localhost:4000/admin/score/setinitialplayer`,
      {matchID ,scoreID , striker , nonStriker , bowler}
    );

    if(!response.data.success){
      throw new Error(response.data.msg)
    }
    dispatch(setMatch(response.data.match));
    dispatch(setScore(response.data.score))
    console.log(response.data.score);
    
  }catch(error){
    console.log(error)
    toast.error(error.msg)
  }
  toast.dismiss(toastID);
  }
}

