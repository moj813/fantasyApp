import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { findMatch } from "../../../../services/operation/tournament";

import "./LiveScore.css";

const LiveScore = () => {
  const { tournamentID } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [score, setScore] = useState("XXX/XX");

  const updateScore = () => {
    const updatedScore = "YYY/YY";
    setScore(updatedScore);
  };

  useEffect(() => {
    findMatch(tournamentID, setLoading, setData);
  }, [tournamentID]);
  return (
    <div className="scoreCard-32">
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {
            data.length===0 ? (<>No Data Found</>) :  (<>
            
            {data.map((item, index) => (
            <div className="live-score-container_32">
              <NavLink to="/user/livescore/22DIT032" onClick={updateScore}>
                <span>{item.teamAName}</span> <span>vs</span>{" "}
                <span>{item.teamBName}</span>
                <h2>Batting Team name</h2>
                <p>{score}</p>
                <h6>Tap for more info</h6>
              </NavLink>
            </div>
          ))}
            </>)
          }
        </>
      )}
    </div>
  );
};

export default LiveScore;
