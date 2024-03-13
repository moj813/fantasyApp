import { toast } from "react-toastify";

import { apiConnector } from "../connector";
import { logout } from './authApi';


export function addtournament(data,navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {

        const response = await apiConnector(
            "POST",
            "http://localhost:4000/auth/addtournament",
            data
          );

      if (!response.data.success) {
        if(response.data.msg=="Token Not Found"){
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
        "http://localhost:4000/auth/gettournamentforuser"
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