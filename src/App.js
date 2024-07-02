import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieListPage } from "./components/MovieListPage";
import { MovieProvider } from "./helper/MovieContext";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MovieProvider>
          <Routes>
            <Route path="/" element={<MovieListPage />} />
          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
