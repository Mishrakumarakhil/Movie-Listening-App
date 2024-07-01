import React from "react";
import "./Header.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { MovieListPage } from "./MovieListPage";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-text">Movie List</div>
      <div className="nav-bar">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/home" element={<MovieListPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};
