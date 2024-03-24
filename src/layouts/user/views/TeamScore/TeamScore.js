import { io } from "socket.io-client";
import { toast } from "react-toastify";
import { useActionData, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Commentry from "./Commentry/Commentry";
import Scorecard from "./Scorecard/Scorecard";
import Squad from "./Squad/Squad";
import Contests from "../Tournaments/TeamPlayers/Contests/Contests";

import { apiConnector } from "../../../../services/connector";
import "./TeamScore.css";

const TeamScore = () => {

  const [selectedButton, setSelectedButton] = useState("commentary");

  const { matchID, scoreID } = useParams();
  const[socket , setSocket] = useState(null)
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);
  const [match, setMatch] = useState(null);



  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const connectSocket = ()=>{
    const newSocket = io("http://localhost:4000");
    newSocket.emit("joinRoom", scoreID);
    newSocket.on("scoreUpdated", (updatedMatch) => {
      console.log("NEw Data Arrived");
      setScore(updatedMatch)
    });
    setSocket(newSocket);
  }

  const fetchData = async () => {

    setLoading(true);
    try {
      const response = await apiConnector(
        "GET",
        `http://localhost:4000/public/scoredetails?matchid=${matchID}&scoreid=${scoreID}`
      );
      if (!response.data.success) {
        toast.error("Can't Find Data");
        return;
      } else {
        toast.success("Found");
        setScore(response.data.score);
        setMatch(response.data.match);
        console.log(response.data);
        connectSocket();
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };




  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="scorecard_32">
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {
            !match && !score ? (<>Not Found</>) : (
            
            <>
              <h3>{match.teamAName} vs {match.teamBName}</h3>
          <nav className="navigation-bar_32">
            <button
              className={selectedButton === "commentary" ? "selected" : ""}
              onClick={() => handleButtonClick("commentary")}
            >
              Commentary
            </button>
            <button
              className={selectedButton === "scorecard" ? "selected" : ""}
              onClick={() => handleButtonClick("scorecard")}
            >
              Score Card
            </button>
            <button
              className={selectedButton === "squad" ? "selected" : ""}
              onClick={() => handleButtonClick("squad")}
            >
              Squad
            </button>
            <button
              className={selectedButton === "Contests" ? "selected" : ""}
              onClick={() => handleButtonClick("Contests")}
            >
              Contests
            </button>
          </nav>
          <br />
          <div
            className={selectedButton === "commentary" ? "visible " : "hidden"}
          >
            <h1>
              <Commentry score={score} match={match}></Commentry>
            </h1>
          </div>
          <div
            className={selectedButton === "scorecard" ? "visible" : "hidden"}
          >
            <h1>
              <Scorecard></Scorecard>{" "}
            </h1>
          </div>
          <div className={selectedButton === "squad" ? "visible" : "hidden"}>
            <h1>
              <Squad score={score} match={match}/>
            </h1>
          </div>
          <div className={selectedButton === "Contests" ? "visible" : "hidden"}>
            <h1>
              <Contests />
            </h1>
          </div>
            </>
            
            )
          }
        </>
      )}
    </div>
  );
};

export default TeamScore;
