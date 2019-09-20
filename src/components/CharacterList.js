import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [initialCharacters, setInitialCharacters] = useState([]);

  const handleChange = event => {
    let list = initialCharacters;
    list = list.filter(
      item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
    );
    setCharacters(list);
  };

  const getCharacter = () => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data);
        setCharacters(response.data.results);
        setInitialCharacters(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <SearchForm search={handleChange} />
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
