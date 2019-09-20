import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <SearchForm search={search} setSearch={setSearch} />
      {characters.map(character => (
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
