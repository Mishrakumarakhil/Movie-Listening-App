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

  const singlePageData = cardList.find((ele) => ele.imdbID === singlePageId);

  return (
    <div className="card-list-container">
      {cardList.map((ele) => (
        <Card
          key={ele.imdbID}
          Poster={ele.Poster}
          Title={ele.Title}
          imdbID={ele.imdbID}
          handleCardClick={() => handleCardClick(ele.imdbID)}
        />
      ))}
      {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeOverlay}>
              &times;
            </span>
            {singlePageData && <MovieDescription movie={singlePageData} />}
          </div>
        </div>
      )}
    </div>
  );
};
