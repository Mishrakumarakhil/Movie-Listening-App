import React from "react";
import "./MovieDescription.css";

export const MovieDescription = ({ movie }) => {
  return (
    <div className="movie-description">
      <div className="movie-details">
        <img src={movie.Poster} alt={movie.Title} />
        <div>
          <h2>{movie.Title}</h2>
          <p>Type: {movie.Type}</p>
          <p>Year: {movie.Year}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};
