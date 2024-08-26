import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const StartButton = styled.button`
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  background-color: red;
  color: white;
  border: none;
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <h1>포켓몬 도감</h1>
      <StartButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        포켓몬 도감 시작하기
      </StartButton>
    </HomeContainer>
  );
};

export default Home;
