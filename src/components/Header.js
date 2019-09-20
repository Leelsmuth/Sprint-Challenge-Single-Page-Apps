import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="home-button">
      <header className="ui centered">
        <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      </header>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/characters">Characters</Link>
    </div>
  );
}
