import axios from "axios";
import React, { useEffect, useState } from "react";
import StatPokemon from "./StatPokemon";
import { useNavigate } from "react-router-dom";
import "../../styles/pokemoCard.css";

const PokemonCard = ({ url }) => {
      const [pokemon, setPokemon] = useState();
      const navigate = useNavigate();

      useEffect(() => {
            axios.get(url)
                  .then((res) => {
                        setPokemon(res.data);
                  })
                  .catch((err) => console.log(err));
      }, []);
      //   console.log(pokemon);
      const handleClick = () => {
            navigate(`/pokedex/${pokemon.name}`);
      };
      return (
            <div className={`card color-${pokemon?.types[0].type.name}`} onClick={handleClick}>
                  <div className={`bg_img bg-${pokemon?.types[0].type.name}`}>
                        <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" className="header_img " />
                  </div>
                  <div className="title">
                        <h2>{pokemon?.name}</h2>
                        {pokemon?.types.map((slot) => (
                              <span key={slot.type.url}> {slot.type.name} </span>
                        ))}
                  </div>
                  <div className="main">
                        {pokemon?.stats.map((stat) => (
                              <StatPokemon key={stat.stat.url} infoStat={stat} />
                        ))}
                  </div>
            </div>
      );
};

export default PokemonCard;
