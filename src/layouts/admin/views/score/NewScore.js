import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Toss from "../mytournaments/Toss";
import Score from "../mytournaments/Score";
import Startbutton from "../mytournaments/Startbutton";
import Choosing from "../mytournaments/Choosing";
import { findMyMatch } from "../../../../services/operation/tournament";

const NewScore = () => {

  const navigate = useNavigate();
  const { matchID } = useParams();

  const { loading } = useSelector((state) => state.matchScore);
  const { match } = useSelector((state) => state.matchScore);
  const { score } = useSelector((state) => state.matchScore);

  const [isCountdownActive, setIsCountdownActive] = useState(true);
  const dispatch = useDispatch();

  useEffect( () => {
    
    if (match == null) {
      dispatch(findMyMatch(matchID));
    }
  }, []);

  return (
    <>
      {loading ? (
       <p>Loading..</p>
      ) : (
        <>
          {match ? (
            <>
              {match.stage == 0 && (
                <Startbutton
                  match={match}
                  isCountdownActive={isCountdownActive}
                  setIsCountdownActive={setIsCountdownActive}
                />
              )}

              {match.stage == 1 && (
                <Toss
                  match={match}
                  dispatch={dispatch}
                />
              )}

              {match.stage == 2 && (
               <Choosing 
               match={match}
               dispatch={dispatch}/>
              )}

              {match.stage == 3 && (
                <Score
                  match={match}
                  dispatch={dispatch}/>
              )}
              {match.stage == 4 && (
                <>Match Completed</>
              )}
            </>
          ) : (
            <p>No Data Found At NEwScore</p>
          )}
        </>
      )}
    </>
  );
};

export default NewScore;
