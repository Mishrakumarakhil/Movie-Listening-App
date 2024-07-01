import React, { useEffect, useState } from "react";
import "./MovieListPage.css";
import { Header } from "./Header";
import { Input } from "./Input";
import { fetchMovieList } from "../helper/action";

export const MovieListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);
  return (
    <>
      <Header />
      <Input value={searchValue} handleInputChange={handleInputChange} />
    </>
  );
};
