import React, { useEffect, useState } from "react";
import "./MovieListPage.css";
import { Header } from "./Header";
import { Input } from "./Input";
import { useMovieContext } from "../helper/MovieContext";
import { MovieCardList } from "./MovieCardList";
import { TypeHeadList } from "./TypeHeadList";

export const MovieListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    movies,
    loading,
    error,
    fetchMovieList,
    fetchTypeHeadList,
    typeHeadList,
    setSinglePage,
  } = useMovieContext();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    fetchTypeHeadList(value);
  };

  useEffect(() => {
    if (searchValue.trim() !== "") {
      const timer = setTimeout(() => {
        fetchMovieList(searchValue);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchValue, fetchMovieList]);

  return (
    <>
      <Header />
      <Input value={searchValue} handleInputChange={handleInputChange} />
      {typeHeadList?.length > 0 && searchValue.trim() !== "" && (
        <TypeHeadList data={typeHeadList} />
      )}
      <MovieCardList
        cardList={movies}
        loading={loading}
        setSinglePage={setSinglePage}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
