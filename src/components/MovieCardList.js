import React from "react";
import "./MovieCardList.css";
import { Card } from "./Card";

export const MovieCardList = ({ loading, cardList }) => {
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
          />
        );
      })}
    </div>
  );
};
