import React from "react";

export const Card = ({ key, Poster, Title, Type, Year, imdbID }) => {
  return (
    <div className="card-container" key={key}>
      <div className="card-poster">
        <img src={Poster} alt="movie-poster" />
      </div>
      <div className="card-title">{Title}</div>
    </div>
  );
};
