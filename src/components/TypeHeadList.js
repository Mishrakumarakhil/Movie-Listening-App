import React from "react";

export const TypeHeadList = ({ data }) => {
  return (
    <div>
      {data.map((ele) => {
        return <div>{ele.Title}</div>;
      })}
    </div>
  );
};
