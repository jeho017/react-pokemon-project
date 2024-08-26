import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dex" element={<Dex />} />
        <Route path="pokemondetail/:pokemonId" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
