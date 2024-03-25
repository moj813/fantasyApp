import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BiCricketBall } from "react-icons/bi";

import Selectbat from "./Selectbat";
import { MdOutlineSportsCricket, MdSportsCricket } from "react-icons/md";
import { findScore } from "../../../../services/operation/score";
import { setScore } from "../../../../slices/matchScore";
import "./Score.css";
import Selectbowl from "./Selectbowl";

const Score = ({ match }) => {
  const dispatch = useDispatch();

  const { score } = useSelector((state) => state.matchScore);

  const [view, setView] = useState(0);
  const [socket, setSocket] = useState(null);
  const [userData, setUserData] = useState({});
  const [striker, setStriker] = useState(null);
  const [bowler, setBowler] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nonStriker, setNonStriker] = useState(null);
  const [battingPlayer, setBattingPlayer] = useState(null);
  const [bowlingPlayer, setBowlingPlayer] = useState(null);

  const connectSocket = () => {
    const newSocket = io(`http://localhost:4000`);
    setSocket(newSocket);

    newSocket.emit("joinRoom", match.scoreID);
    newSocket.on("6ballCompleate", () => {
      setView(1);
    });

    newSocket.on("scoreUpdated", (updatedMatch) => {
      dispatch(setScore(updatedMatch));
    });

    toast.success("Connected");
  };

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
    connectSocket();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    return () => {
      socket.off("dataUpdated");
    };
  }, [socket]);

  const update1Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update1", score);
  };

  const update0Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update0", score);
  };

  const update2Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update2", score);
  };

  const update3Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update3", score);
  };

  const update4Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update4", score);
  };

  const update6Run = () => {
    console.log("Called");
    if (score.currentBall >= 6) {
      return toast.warning("Change Over");
    }
    socket.emit("update6", score);
  };

  const updateOver = (selectedPlayer) => {
    console.log("Called");
    socket.emit("changeOver", { score: score, bowlerID: selectedPlayer });
  };

  const handelOver = () => {
    console.log("Peinon", score.over);
    //Check The Size of Over Object if it is six then change The Over
    if (
      score.currentBall >= 6 &&
      score.currentOver >= 0 &&
      view === 0 &&
      score.over.length >= 6
    ) {
      setView(1);
    } else {
      toast.warning("Wait For Over to Complete");
    }
  };

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <>
          {score && bowlingPlayer ? (
            <>
              {view === 0 && (
                <div className="protector">
                  <div className="Outer-box">
                    <div className="tempAtSCore">
                      <div className="score">
                        <div className="div1">
                          <div className="first">
                            {score.currentRun}/{score.currentWicket}
                            <span className="second">
                              ({score.currentOver}.{score.currentBall}/
                              {match.noOfOvers})
                            </span>
                          </div>
                        </div>
                        <div className="div2">
                          <div className="subdiv1">
                            <h5>
                              <MdSportsCricket className="icin" />
                            </h5>
                            <div className="vivek">
                              {
                                score[score.currentBattingTeam.teamID][
                                  score.currentStrikerID
                                ].playerName
                              }
                              <h4 className="vivek">
                                {
                                  score[score.currentBattingTeam.teamID][
                                    score.currentStrikerID
                                  ].totalRun
                                }
                                (
                                {
                                  score[score.currentBattingTeam.teamID][
                                    score.currentStrikerID
                                  ].totalBallPlayed
                                }
                                )
                              </h4>
                            </div>
                          </div>
                          <div className="subdiv1">
                            <h5>
                              <MdOutlineSportsCricket className="icin" />
                            </h5>
                            <div className="vivek">
                              {
                                score[score.currentBattingTeam.teamID][
                                  score.currentNonStrikerID
                                ].playerName
                              }
                              <h4 className="vivek">
                                {
                                  score[score.currentBattingTeam.teamID][
                                    score.currentNonStrikerID
                                  ].totalRun
                                }
                                (
                                {
                                  score[score.currentBattingTeam.teamID][
                                    score.currentNonStrikerID
                                  ].totalBallPlayed
                                }
                                )
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bowl">
                        <div className="bowlerName">
                          <BiCricketBall />
                          <span className="Rikin">
                            {bowlingPlayer[score.currentBowlerID].playerName}
                          </span>
                        </div>
                        <div className="main_18">
                          <div className="main_18_inner">
                            <div className="round">
                              1 <div>nb</div>
                            </div>
                            <div className="round">
                              2 <div></div>
                            </div>
                            <div className="round">
                              4 <div>NB</div>
                            </div>
                            <div className="round">
                              5 <div></div>
                            </div>
                            <div className="round">
                              6 <div>NB</div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                            <div className="round">
                              7 <div></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="temp2Score">
                      <div className="grid">
                        <div className="score1button_18" onClick={update0Run}>
                          <button className="scorebutton_18">0</button>
                        </div>
                        <div className="score1button_18" onClick={update1Run}>
                          <button className="scorebutton_18">1</button>
                        </div>
                        <div className="score1button_18" onClick={update2Run}>
                          <button className="scorebutton_18">2</button>
                        </div>
                        <div className="score1button_18">
                          <button className="scorebutton_18">UNDO</button>
                        </div>
                        <div className="score1button_18" onClick={update3Run}>
                          <button className="scorebutton_18">3</button>
                        </div>
                        <div className="score1button_18" onClick={update4Run}>
                          <button className="scorebutton_18">4</button>
                        </div>
                        <div className="score1button_18" onClick={update6Run}>
                          <button className="scorebutton_18">6</button>
                        </div>
                        <div className="score1button_18">
                          <NavLink to="/admin/mytournaments/Out">
                            <button className="scorebutton_18">OUT</button>
                          </NavLink>
                        </div>
                        <div className="score1button_18">
                          <button className="scorebutton_18">WD</button>
                        </div>
                        <div className="score1button_18">
                          <NavLink to="/admin/mytournaments/Noball">
                            <button className="scorebutton_18">NB</button>
                          </NavLink>
                        </div>
                        <div className="score1button_18">
                          <button className="scorebutton_18">BYE</button>
                        </div>
                        <div className="score1button_18">
                          <button className="scorebutton_18">LB</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="atScoreBtnContainer">
                    <button onClick={handelOver}>End Over</button>
                    <button>End this Half</button>
                  </div>
                </div>
              )}

              {
                //pass Event of Socket to handle Update Bowler Update Direct there
                view === 1 && (
                  <Selectbowl
                    score={score}
                    updateOver={updateOver}
                    setView={setView}
                    bowlingPlayer={bowlingPlayer}
                  />
                )
              }
            </>
          ) : (
            <>No Data Found</>
          )}
        </>
      )}
    </>
  );
};

export default Score;
