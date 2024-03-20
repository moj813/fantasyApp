import React from 'react';

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
);

const Contests = () => {
  const contests = [
    { id: 1, name: "Beginner's Contest", entryFee: 5, prizePool: 100 },
    { id: 2, name: "Intermediate Contest", entryFee: 10, prizePool: 200 },
    { id: 3, name: "Expert Contest", entryFee: 20, prizePool: 500 },
    // Add more contests here
  ];

  return (
    <div className="contests-page">
      <h1>Contests</h1>
      <ContestList contests={contests} />
    </div>
  );
};

export default Contests;
