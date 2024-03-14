import React from "react";
import { NavLink , Link} from 'react-router-dom';

const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const TournamentView = ({ tournament }) => {
  return (
      <div className="list-view">
        <div className="card">
          <h2>{tournament.tournamentName}</h2>
          <p className="datevire_32">From {formatDate(tournament.startDate)} to {formatDate(tournament.endDate)}</p>
          <p>{tournament.cityName}</p>
          <h6>Tap to enroll</h6>
        </div>
      </div>
  );
};

export default TournamentView;
