import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <h4> {`Name: ${props.name}`} </h4>
      <img src={props.image} alt="#" />
      <h4> {`Species: ${props.species}`} </h4>
      <h4> {`Status: ${props.status}`} </h4>
      <h4> {`Origin: ${props.origin}`} </h4>
      <h4> {`Location: ${props.location}`} </h4>
    </div>
  );
}
