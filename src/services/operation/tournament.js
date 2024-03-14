import { toast } from "react-toastify";

import { apiConnector } from "../connector";
import { logout } from './authApi';


export function addtournament(data,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {

        const response = await apiConnector(
            "POST",
            "http://localhost:4000/admin/tournament/addtournament",
            data
          );

      if (!response.data.success) {
        if(response.data.msg==="Token Not Found"){
          toast.dismiss(toastId)
          navigate("/");
          dispatch(logout());
        }
        throw new Error(response.data.msg);
      }

      toast.dismiss(toastId)
      toast.success("Tournament Created");
      navigate('/admin/mytournaments');
    } catch (error) {
      toast.dismiss(toastId)
      console.log("Error At Services");
      console.log(error)
      toast.error("Could Not created tournament");
    }
    
  };
}

export async function findMyTournament(setUserTournaments,setLoading){
    try{
      setLoading(true);
      const response = await apiConnector(
        "GET",
        "http://localhost:4000/admin/tournament/gettournamentforuser"
      );
    
     if(!response.data.success){
      setUserTournaments(response) ;
      setLoading(false);
      throw new Error(response.data.msg);
     }

     if(response.data.success){
      setUserTournaments(response.data.result) ;
     }
      setLoading(false);
    }catch(error){
      setLoading(false);
      console.log(error)
      toast.error("Could Get Your Tournament");
    }
  
}

export async function findAllTournaments(setTournaments , setLoading){
  try{
    const response = await apiConnector(
      "GET",
      "http://localhost:4000/admin/tournament/getalltournaments"
    );
  
   if(!response.data.success){
    setTournaments(response) ;
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    setTournaments(response.data.result) ;
   }
    setLoading(false);
  }catch(error){
    console.log(error)
    toast.error("Could Get Your Tournament");
  }
}

export async function addTeam(teamName, cityName,tournamentId){
  const toastId = toast.loading("Loading...")
  try{
   
    const response = await apiConnector(
      "POST",
      "http://localhost:4000/admin/tournament/addteam",{teamName, cityName,tournamentId}
    );
  
   if(!response.data.success){
    throw new Error(response.data.msg);
   }
   toast.dismiss(toastId);
   toast.success("Team Added");

  }catch(error){

    toast.error(error.msg)
    console.log(error)
    toast.error("Could Get Your Tournament");

  }

  toast.dismiss(toastId);
}


export async function findMyTeam(tournamentID,setMyTeam,setLoading){
  try{
    setLoading(true);
    const response = await apiConnector(
      "GET",
      `http://localhost:4000/admin/tournament/myteams?tournamentId=${tournamentID}`,
    );
  
   if(!response.data.success){
    setLoading(false);
    throw new Error(response.data.msg);
   }

   if(response.data.success){
    setMyTeam(response.data.result) ;
   }
    setLoading(false);
  }catch(error){
    setLoading(false);
    toast.error("Could Get Your Tournament");
  }

}