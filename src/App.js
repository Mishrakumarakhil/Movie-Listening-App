import React from "react";
import { MovieListPage } from "./components/MovieListPage";
import { MovieProvider } from "./helper/MovieContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieListPage />
      </MovieProvider>
    </div>
  );
}

export default App;
