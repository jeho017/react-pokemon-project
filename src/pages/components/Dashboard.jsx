import { useContext } from "react";
import styled from "styled-components";
import { PokemonContext } from "../PokemonContext";

const formatId = (id) => {
  return `No.${String(id).padStart(3, "0")}`;
};

const Dashboard = () => {
  const { selectedPokemon, handleRemovePokemon } = useContext(PokemonContext);

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬</h2>
      <PokemonCards>
        {selectedPokemon.map((pokemon) => (
          <PokemonCardWrapper key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h3>{pokemon.korean_name}</h3>
            <p>{formatId(pokemon.id)}</p>
            <RemoveButton onClick={() => handleRemovePokemon(pokemon.id)}>
              삭제
            </RemoveButton>
          </PokemonCardWrapper>
        ))}
      </PokemonCards>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const PokemonCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  min-height: 120px; //최소 높이를 지정하여 빈 구역에서도 공간 확보
`;

const PokemonCardWrapper = styled.div`
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const RemoveButton = styled.button`
  position: center;
  top: 5px;
  right: 5px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;
