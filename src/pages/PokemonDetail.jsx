import React from "react";
import MOCK_DATA from "./mock";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const PokemonDetail = () => {
  const { pokemonId } = useParams();

  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(pokemonId));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <Detail>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(",")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate("/dex")}>뒤로 가기</button>
    </Detail>
  );
};

export default PokemonDetail;
