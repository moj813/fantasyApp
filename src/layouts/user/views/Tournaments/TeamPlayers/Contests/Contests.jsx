import React from 'react';
import './Contests.css';
import { NavLink } from 'react-router-dom';

const Contest = ({ id, name, entryFee, prizePool }) => (
  <div className="contest">
    <h3>{name}</h3>
    <p>Contest ID: {id}</p>
    <p>Entry Fee: ${entryFee}</p>
    <p>Prize Pool: ${prizePool}</p>
    {/* Add more details if needed */}
  </div>
);

const ContestList = ({ contests }) => (
  <NavLink to={`/user/tournaments/match/teamplayer`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="contest-list">
      <h2>Available Contests</h2>
      {contests.map(contest => (
        <Contest
          key={contest.id}
          id={contest.id}
          name={contest.name}
          entryFee={contest.entryFee}
          prizePool={contest.prizePool}
        />
      ))}
    </div>
  </NavLink>
);

const Contests = () => {
  const contests = [
    { id: 1, name: "Beginner's Contest", entryFee: 5, prizePool: 100 },
    { id: 2, name: "Intermediate Contest", entryFee: 10, prizePool: 200 },
    { id: 3, name: "Expert Contest", entryFee: 20, prizePool: 500 },
  ];

  return (
    <div className="contests-page">
      <ContestList contests={contests} />
    </div>
  );
};

export default Contests;
