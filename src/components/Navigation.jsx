import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/search/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/search/cat">Cat</NavLink>
        </li>
        <li>
          <NavLink to="/search/dog">Dog</NavLink>
        </li>
        <li>
          <NavLink to="/search/coffee">Coffee</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
