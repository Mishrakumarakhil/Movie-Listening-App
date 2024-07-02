import React from "react";

export const TypeHeadList = ({ data }) => {
  return (
    <div>
      {data.map((ele) => (
        <div key={ele.imdbID}>{ele.Title}</div>
      ))}
    </div>
  );
};
