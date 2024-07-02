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
  const [fetchingMore, setFetchingMore] = useState(false); // State to track fetching more movies

  const fetchMovieList = async (searchText = "marvel") => {
    setLoading(true);
    setError(null);
    try {
      const url = `${API_URL + searchText}&page=${pageNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        if (pageNumber === 1) {
          setMovies(data.Search);
        } else {
          setMovies((prev) => [...prev, ...data.Search]);
        }
        setTypeHeadList(data.Search); // Assuming this sets typeHeadList correctly for typeahead
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
      setFetchingMore(false); // Reset fetching more flag
    }
  };

  const fetchTypeHeadList = (val) => {
    let data = movies.filter((ele) =>
      ele.Title.toLowerCase().includes(val.toLowerCase())
    );
    setTypeHeadList(data);
  };

  const setSinglePage = (id) => {
    setSinglePageId(id);
  };

  const infiniteScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      !fetchingMore // Check if not already fetching more
    ) {
      setFetchingMore(true); // Set fetching more flag to true
      setPageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchMovieList();
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);

    return () => window.removeEventListener("scroll", infiniteScroll);
  }, [infiniteScroll]); // Use the function reference directly

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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
