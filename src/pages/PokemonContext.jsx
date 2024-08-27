import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
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
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        handleAddPokemon,
        handleRemovePokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
