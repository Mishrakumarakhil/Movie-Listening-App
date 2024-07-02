import React from "react";
import "./Header.css";

import { NavBar } from "./NavBar";
import { MovieListPage } from "./MovieListPage";
export const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-text">Movie List</div>
      <div className="nav-bar">
        <NavBar />
      </div>
    </div>
  );
};
