import { useState } from "react";
import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const DexContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <DexContainer>
      <Dashboard selectedPokemon={selectedPokemon} />
      <PokemonList pokemonList={MOCK_DATA} />
    </DexContainer>
  );
}
