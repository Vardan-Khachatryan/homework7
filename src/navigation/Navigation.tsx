import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div>
      <nav className="Navigation">
        <Link to="/">Main</Link>|<Link to="/about">About</Link>|
        <Link to="/contact"> Contacts</Link>|<Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};
