import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "./Pokedex/PokemonCard";
import pokeball from "../assets/pokeball.png";
import { useSelector } from "react-redux";
import pokedex from "../assets/pokedexLogo.png";
import SelectType from "./SelectType";
import "../styles/pokedex.css";

const Pokedex = () => {
      const nameTrainer = useSelector((state) => state.nameTrainer);
      const [pokemons, setPokemons] = useState();
      const [pokeSearch, setPokeSearch] = useState();
      const [optionType, setOptionType] = useState("All");

      useEffect(() => {
            if (optionType !== "All") {
                  const URL = `https://pokeapi.co/api/v2/type/${optionType}/?limit=10&offset=0`;
                  axios.get(URL)
                        .then((res) => {
                              const arr = res.data.pokemon.map((e) => e.pokemon);
                              setPokemons({ results: arr });
                        })
                        .catch((err) => console.log(err));
            } else if (pokeSearch) {
                  const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;
                  const obj = { results: [{ url }] };
                  setPokemons(obj);
            } else {
                  const URL = "https://pokeapi.co/api/v2/pokemon";
                  axios.get(URL)
                        .then((res) => setPokemons(res.data))
                        .catch((err) => console.log(err));
            }
      }, [pokeSearch, optionType]);

      const handleSubmit = (e) => {
            e.preventDefault();
            setPokeSearch(e.target.name.value.trim().toLowerCase());
      };
      return (
            <div className="pokedex">
                  <div className="navbar">
                        <div className="navbar_red"></div>
                        <div className="navbar_black"></div>
                        <img src={pokeball} alt="pokeball" />
                        <img src={pokedex} alt="pokedex" className="pokedex_ico" />
                  </div>
                  <br />
                  <h2 className="name">
                        Welcome <span>{nameTrainer}</span> discover all pokemons !
                  </h2>
                  <form className="form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="search pokemon" id="name" />
                        <button>Search</button>
                  </form>
                  <SelectType setOptionType={setOptionType} />
                  <div className="cards-container">
                        {pokemons?.results.map((pokemon) => (
                              <PokemonCard key={pokemon.url} url={pokemon.url} />
                        ))}
                  </div>
            </div>
      );
};

export default Pokedex;
