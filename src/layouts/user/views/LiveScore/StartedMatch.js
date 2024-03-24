import React, { useState, useEffect } from "react";
import { findScoreByID } from "../../../../services/operation/clientSideScore";
import { NavLink, Link } from "react-router-dom";

const StartedMatch = ({ tournamentId, item }) => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(null);

  useEffect(() => {
    findScoreByID(item.scoreID, { setLoading, setScore });
  }, []);

  return (
    <>
      <div className="live-score-container_32">
        {loading ? (
          <>Loading</>
        ) : (
          <>
            <span>
              {item.teamAName} vs {item.teamBName}
            </span>
            {!score ? (
              <>
                <h2>No Data Found</h2>
                <p>
                  <span>XXX/XX</span>(xxx/xx)
                </p>
                <h6>404 Error</h6>
              </>
            ) : (
              <>
                {" "}
                <h2>{score.currentBattingTeam.teamName}</h2>
                <p>
                  <span>
                    {score.currentRun}/{score.currentWicket}
                  </span>
                  ({score.currentOver}.{score.currentBall}/{item.noOfOvers})
                </p>
                <h6>Tap For Information</h6>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default StartedMatch;
