import React, { createContext, useState, useEffect, useContext } from "react";
import { API_URL } from "./constant";

const MovieContext = createContext();

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singlePageId, setSinglePageId] = useState(null);
  const [typeHeadList, setTypeHeadList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchMovieList = async (searchText = "marvel") => {
    setLoading(true);
    setError(null);
    try {
      const url = `${API_URL + searchText}&page=${pageNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies((prev) => [...prev, ...data.Search]);
        setTypeHeadList((prev) => [...prev, data.Search]);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const fetchTypeHeadList = (val) => {
    let data = typeHeadList?.filter((ele) =>
      ele.Title.toLowerCase().includes(val.toLowerCase())
    );
    setTypeHeadList(data);
  };

  const setSinglePage = (id) => {
    setSinglePageId(id);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  const infiniteScroll = async (val) => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight
    ) {
      if (!loading) {
        await setPageNumber((prev) => prev + 1);
        await fetchMovieList(val);
      }
    }
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovieList,
        loading,
        error,
        setSinglePage,
        singlePageId,
        fetchTypeHeadList,
        typeHeadList,
        infiniteScroll,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
