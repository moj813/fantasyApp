import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { setLoadingAtMatch, setMatch , setScore } from "../../slices/matchScore";





export async function findScoreByID(scoreID ,{ setLoading , setScore}){

  setLoading(true);
  try{
      const response = await apiConnector(
        "GET",
        `http://localhost:4000/public/findscorebyid?scoreid=${scoreID}`
      );
      if (!response.data.success) {
        throw new Error(response.data.msg);
      }

      if (response.data.success) {
        console.log("Log at Call",response.data.score)
        setScore(response.data.score)
      }
      
  }catch(error){
    console.log(error)
  }
  setLoading(false);
}


