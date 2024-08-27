import { useContext } from "react";
import Dashboard from "./components/Dashboard";
import PokemonList from "./components/PokemonList";
import styled from "styled-components";
import { PokemonContext } from "./PokemonContext";

const Dex = () => {
  const { selectedPokemon, handleAddPokemon, handleRemovePokemon } =
    useContext(PokemonContext);

  return (
    <div>
      <DexContainer>
        <Dashboard
          selectedPokemon={selectedPokemon}
          removePokemon={handleRemovePokemon}
        />
      </DexContainer>
      <PokemonList addPokemon={handleAddPokemon} />
    </div>
  );
};

export default Dex;

const DexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
