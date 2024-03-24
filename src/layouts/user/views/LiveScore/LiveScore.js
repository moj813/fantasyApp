import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { findMatch } from "../../../../services/operation/tournament";
import NotStartedMatch from "./NotStartedMatch";
import StartedMatch from "./StartedMatch";
import CompletedMatch from "./CompletedMatch";

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
          {data.length === 0 ? (
            <>No Data Found</>
          ) : (
            <>
              {data.map((item, index) => (
                <>
                  {item.status === "Live" && (
                    <NavLink to={`/user/${item._id}/match/${item.scoreID}`} className="navlinkStyleAtCard" >
                      <StartedMatch tournamentID={tournamentID} item={item} />
                    </NavLink>
                  )}
                  {item.status === "Upcoming" && (
                    <NotStartedMatch tournamentID={tournamentID} item={item} />
                  )}
                  {item.status === "Completed" && (
                    <CompletedMatch tournamentID={tournamentID} item={item} />
                  )}
                </>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default LiveScore;
