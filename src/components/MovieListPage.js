import React, { useState } from "react";
import "./MovieListPage.css";
import { Header } from "./Header";
import { Input } from "./Input";

export const MovieListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <>
      <Header />
      <Input value={searchValue} handleInputChange={handleInputChange} />
    </>
  );
};
