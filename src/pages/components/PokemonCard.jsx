import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  }
`;

const AddButton = styled.button`
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
`;

const formatId = (id) => {
  return `No.${String(id).padStart(3, "0")}`;
};

const PokemonCard = ({ pokemon, addPokemon }) => {
  return (
    <Card>
      <Link
        to={`/pokemondetail/${pokemon.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h3>{pokemon.korean_name}</h3>
        <p>{formatId(pokemon.id)}</p>
      </Link>
      <AddButton
        onClick={() => {
          addPokemon(pokemon);
        }}
      >
        추가
      </AddButton>
    </Card>
  );
};

export default PokemonCard;
