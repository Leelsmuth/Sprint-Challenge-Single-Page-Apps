import React from "react";

export default function SearchForm(props) {
  return (
    <div className="search-form">
      <section>
        <label htmlFor="search">Search: </label>
        <input
          type="search"
          onChange={props.search}
          placeholder="Search character"
        />
      </section>
    </div>
  );
}
