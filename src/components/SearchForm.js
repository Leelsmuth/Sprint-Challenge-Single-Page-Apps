import React from "react";

export default function SearchForm(props) {
  const { search, setSearch } = props;

  return (
    <div className="search-form">
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="search">Search: </label>
        <input
          id="search"
          name="name"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search character"
        />
      </form>
    </div>
  );
}
