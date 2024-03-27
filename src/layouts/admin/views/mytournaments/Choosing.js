import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Selectbat from "./Selectbat";
import "./Choosing.css";
import { findScore, setIntialPLayer } from "../../../../services/operation/score";

const Choosing = ({ match }) => {
  console.log(match)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { score } = useSelector((state) => state.matchScore);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState(0);
  const [battingPlayer, setBattingPlayer] = useState(null);
  const [bowlingPlayer, setBowlingPlayer] = useState(null);
  const [striker, setStriker] = useState(null);
  const [nonStriker, setNonStriker] = useState(null);
  const [bowler, setBowler] = useState(null);

  useEffect(() => {
    dispatch(
      findScore(
        match.scoreID,
        match,
        setLoading,
        setBowlingPlayer,
        setBattingPlayer
      )
    );
  }, []);

  const setPlayerHandle = ()=>{
    console.log("Striker"  ,striker)
    console.log("Non Striker"  ,nonStriker)
    console.log("bowler"  ,bowler)
    dispatch(setIntialPLayer(match._id , score._id , striker, nonStriker,bowler , navigate))
  }

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {score ? (
            <>
              {view === 0 && (
                <div className="atChoosing-outer-box">
                  <div className="atChoosing-inside-box">
                    {/* Accessing batting team name */}
                    <p>{score.currentBattingTeam.teamName}</p>
                    <div className="atChoosing-card-row">
                      {/* Render the Player component when the link is clicked */}
                      <div
                        className="atChoosing-card"
                        onClick={() => setView(1)}
                      >
                        {!striker ? (
                          <>Select Striker</>
                        ) : (
                          <>{battingPlayer[striker].playerName}</>
                        )}
                      </div>
                      <div
                        className="atChoosing-card"
                        onClick={() => setView(2)}
                      >
                        {!nonStriker ? (
                          <>Select Non Striker</>
                        ) : (
                          <>{battingPlayer[nonStriker].playerName}</>
                        )}
                      </div>
                    </div>
                    {/* Accessing bowling team name */}
                    <p>{score.currentBowlingTeam.teamName}</p>
                    <div className="atChoosing-card-row">
                      <div
                        className="atChoosing-card"
                        onClick={() => setView(3)}
                      >
                        {!bowler ? (
                          <>Select Bowler</>
                        ) : (
                          <>{bowlingPlayer[bowler].playerName}</>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Render the Player component based on the selected player */}

                  {!striker || !nonStriker || !bowler ? (
                    <>
                      Select Player First *
                    </>
                  ) : (
                    
                      <button className="atChoosing-custom-button" onClick={setPlayerHandle}>
                        Start Innings
                      </button>
                   
                  )}
                </div>
              )}

              {view === 1 && (
                <Selectbat
                  setView={setView}
                  battingPlayer={battingPlayer}
                  setStriker={setStriker}
                  striker={nonStriker}
                />
              )}

              {view === 2 && (
                <Selectbat
                  setView={setView}
                  battingPlayer={battingPlayer}
                  setStriker={setNonStriker}
                  striker={striker}
                />
              )}

              {view === 3 && (
                <Selectbat
                  setView={setView}
                  battingPlayer={bowlingPlayer}
                  setStriker={setBowler}
                />
              )}
            </>
          ) : (
            <>No Data Found</>
          )}
        </>
      )}
    </>
  );
};

export default Choosing;
