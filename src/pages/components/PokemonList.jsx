import { useContext } from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";
import { PokemonContext } from "../PokemonContext";
import MOCK_DATA from "../mock";

const PokemonList = () => {
  const { handleAddPokemon } = useContext(PokemonContext);
  const pokemonList = MOCK_DATA;

  return (
    <PokemonListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={handleAddPokemon}
        />
      ))}
    </PokemonListContainer>
  );
};

export default PokemonList;

const PokemonListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
`;
