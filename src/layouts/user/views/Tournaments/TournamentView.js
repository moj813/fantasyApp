import React from "react";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const TournamentView = (tournament) => {
  return (
    <div className="list-view">
      <div className="cards">
        <div className="card">
          <span>{tournament.tournament.tournamentName}</span>
          <h2>From {formatDate(tournament.tournament.startDate)} to {formatDate(tournament.tournament.lastDate)}</h2>
          <p>{tournament.tournament.cityName}</p>
          <h6>Tap to enroll</h6>
        </div>
      </div>
    </div>
  );
};

export default TournamentView;
