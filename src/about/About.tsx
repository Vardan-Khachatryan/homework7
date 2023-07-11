import React from "react";
import { Navigation } from "../navigation/Navigation";
import "./about.css";

export const About = () => {
  return (
    <div className="About">
      <header>
        <Navigation />
      </header>
      <main>
        <h3>In this page you can find many intresting posts</h3>
      </main>
    </div>
  );
};
