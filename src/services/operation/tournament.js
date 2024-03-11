import { toast } from "react-toastify";

import { apiConnector } from "../connector";



export function addtournament(data,navigate) {
    console.log("Printing")
    console.log("")
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    try {
        console.log("Printing at Service");
        console.log(data)
        const response = await apiConnector(
            "POST",
            "http://localhost:4000/auth/addtournament",
            data
          );

      if (!response.data.success) {
        throw new Error(response.data.message);
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
