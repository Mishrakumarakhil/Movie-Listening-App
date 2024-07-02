import React, { useState, useEffect } from "react";
import "./MovieListPage.css";
import { Header } from "./Header";
import { Input } from "./Input";
import { useMovieContext } from "../helper/MovieContext";
import { MovieCardList } from "./MovieCardList";

export const MovieListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const { movies, fetchMovieList, loading, error } = useMovieContext();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  const handleSearch = (value) => {
    fetchMovieList(value);
  };

  return (
    <>
      <Header />
      <Input value={searchValue} handleInputChange={handleInputChange} />
      {loading && <p>Loading...</p>}
      {/* {error && <p>{error}</p>} */}
      <MovieCardList cardList={movies} loading={loading} />
    </>
  );
};
