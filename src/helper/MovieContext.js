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

  const fetchMovieList = async (searchText = "marvel", pageNumber = 1) => {
    setLoading(true);
    setError(null);
    try {
      const url = `${API_URL + searchText}&page=${pageNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const setSinglePage = (id) => {
    setSinglePageId(id);
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        fetchMovieList,
        loading,
        error,
        setSinglePage,
        singlePageId,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
