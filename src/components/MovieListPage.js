import React, { useState, useEffect, useRef } from "react";
import "./MovieListPage.css";
import { Header } from "./Header";
import { Input } from "./Input";
import { useMovieContext } from "../helper/MovieContext";
import { MovieCardList } from "./MovieCardList";
import { TypeHeadList } from "./TypeHeadList";

export const MovieListPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const timer = useRef(null);
  const {
    movies,
    fetchMovieList,
    loading,
    error,
    setSinglePage,
    singlePageId,
    fetchTypeHeadList,
    typeHeadList,
    infiniteScroll,
  } = useMovieContext();

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    // Debounce logic for typehead search
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fetchTypeHeadList(searchValue);
    }, 300);
  }, [searchValue]);

  const handleScroll = () => {
    infiniteScroll();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  //   useEffect(() => {
  //     handleSearch(searchValue);
  //   }, [searchValue]);

  //   const handleSearch = (value) => {
  //     fetchMovieList(value);
  //   };

  return (
    <>
      <Header />
      <Input value={searchValue} handleInputChange={handleInputChange} />
      {typeHeadList?.length > 0 && searchValue.trim() != "" && (
        <TypeHeadList data={typeHeadList} />
      )}
      {/* {error && <p>{error}</p>} */}
      <MovieCardList
        cardList={movies}
        loading={loading}
        setSinglePage={setSinglePage}
        singlePageId={singlePageId}
      />
    </>
  );
};
