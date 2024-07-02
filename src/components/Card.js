import React from "react";

export const Card = ({ key, Poster, Title, imdbID, handleCardClick }) => {
  return (
    <div
      className="card-container"
      key={key}
      onClick={() => handleCardClick(imdbID)}
    >
      <div className="card-poster">
        <img src={Poster} alt="movie-poster" />
      </div>
      <div className="card-title">{Title}</div>
    </div>
  );
};
