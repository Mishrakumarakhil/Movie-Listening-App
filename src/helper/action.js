import { API_URL } from "./constant";

export const fetchMovieList = async (searchText = "marvel", pageNumber = 1) => {
  const url = `${API_URL + searchText}&page=${pageNumber}`;
  const data = await fetch(url);
  const jsonData = await data.json();
  console.log("jsonData", jsonData);
};
