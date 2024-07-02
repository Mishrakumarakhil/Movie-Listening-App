import React, { useState } from "react";
import "./MovieCardList.css";
import { Card } from "./Card";
import { MovieDescription } from "./MovieDescription";

export const MovieCardList = ({
  loading,
  cardList,
  setSinglePage,
  singlePageId,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClick = (id) => {
    setSinglePage(id);
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    setSinglePage(null);
  };
  const singlePageData = cardList.filter((ele) => ele.imdbID == singlePageId);
  return (
    <div className="card-list-container">
      {cardList.map((ele) => {
        return (
          <Card
            key={ele.imdbID}
            Poster={ele.Poster}
            Title={ele.Title}
            Type={ele.Type}
            Year={ele.Year}
            imdbID={ele.imdbID}
            handleCardClick={handleCardClick}
          />
        );
      })}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="close" onClick={closeOverlay}>
              &times;
            </span>
            {singlePageData && <MovieDescription movie={singlePageData[0]} />}
          </div>
        </div>
      )}
    </div>
  );
};
