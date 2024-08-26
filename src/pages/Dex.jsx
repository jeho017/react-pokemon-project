import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import PokemonList from "./components/PokemonList";
import MOCK_DATA from "./mock";
import styled from "styled-components";

const DexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleAddPokemon = (pokemon) => {
    const isAlreadyAdded = selectedPokemon.some((p) => p.id === pokemon.id);

    if (isAlreadyAdded) {
      alert("이미 추가된 포켓몬입니다!");
    } else if (selectedPokemon.length < 6) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    } else {
      alert("최대 6개의 포켓몬만 추가할 수 있습니다.");
    }
  };

  const handleRemovePokemon = (id) => {
    setSelectedPokemon(selectedPokemon.filter((pokemon) => pokemon.id !== id));
  };

  return (
    <div>
      <DexContainer>
        <Dashboard
          selectedPokemon={selectedPokemon}
          removePokemon={handleRemovePokemon}
        />
      </DexContainer>
      <PokemonList pokemonList={MOCK_DATA} addPokemon={handleAddPokemon} />
    </div>
  );
};

export default Dex;
