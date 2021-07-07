import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
  flex-flow: row-reverse wrap-reverse;
`;

const Img = styled.img`
  border-radius: 50%;
`;

export default function CharacterCard(props) {
  return (
    <ContentDiv>
      <div>
        <Img src={props.image} alt="#" />
        <h4> {`Name: ${props.name}`} </h4>
        <h4> {`Species: ${props.species}`} </h4>
        <h4> {`Status: ${props.status}`} </h4>
        <h4> {`Origin: ${props.origin}`} </h4>
        <h4> {`Location: ${props.location}`} </h4>
      </div>
    </ContentDiv>
  );
}
