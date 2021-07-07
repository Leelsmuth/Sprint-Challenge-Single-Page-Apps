import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");

  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")

      .then(response => {
        const data = response.data.results;
        const results = data.filter(item => {
          return item.name.toLowerCase().includes(searchTerm);
        });
        setSearchResults(results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <SearchForm search={handleChange} />
      {searchResults.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
          origin={character.origin.name}
          location={character.location.name}
        />
      ))}
    </section>
  );
}
