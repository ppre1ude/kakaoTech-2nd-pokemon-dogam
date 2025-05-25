import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 2px solid #dddddd;
  background-color: #ffffff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: black;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

function PokemonCard({ pokemon }) {
  return (
    <Card>
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>{pokemon.description}</div>
    </Card>
  );
}

export default PokemonCard;
