import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import pokedex from "../assets/pokedexLogo.png";
import { useParams } from "react-router-dom";
import "../styles/details.css";

const PokemonDetails = () => {
      const { name } = useParams();
      const navigate = useNavigate();
      const [pokemon, setPokemon] = useState();
      const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;

      useEffect(() => {
            axios.get(url)
                  .then((res) => setPokemon(res.data))
                  .catch((err) => console.log(err));
      }, []);
      console.log(pokemon);
      const back = () => {
            navigate(`/pokedex`);
      };
      return (
            <div className="content_details">
                  <div className="navbar">
                        <div className="navbar_red"></div>
                        <div className="navbar_black"></div>
                        <img src={pokeball} alt="pokeball" />
                        <img src={pokedex} alt="pokedex" className="pokedex_ico" />
                  </div>
                  <button onClick={back} className={`btn_back bg-${pokemon?.types[0].type.name}`} s>
                        BACK
                  </button>
                  <div className="header">
                        <div className="stats">
                              <div className={`poke_img bg-${pokemon?.types[0].type.name}`}>
                                    <img
                                          src={pokemon?.sprites.other["official-artwork"]["front_default"]}
                                          alt={pokemon?.sprites.other["official-artwork"]["front_default"]}
                                    />
                              </div>
                              <h2 className={`poke_name color-text-${pokemon?.types[0].type.name}`}>{name}</h2>
                              <div className="row1">
                                    <div className="row1_item">
                                          <span>Weight</span>
                                          <p>{pokemon?.weight}</p>
                                    </div>
                                    <div className="row1_item">
                                          <span>Height</span>
                                          <p>{pokemon?.height}</p>
                                    </div>
                              </div>
                              <div className="row2">
                                    <div className="row2_item">
                                          <h3>Type</h3>
                                          <div className="row2_detail">
                                                {pokemon?.types.map((item, index) => {
                                                      return <span key={index}>{item.type.name}</span>;
                                                })}
                                          </div>
                                    </div>
                                    <div className="row2_item">
                                          <h3>Habilities</h3>
                                          <div className="row2_detail">
                                                {pokemon?.abilities.map((item, index) => {
                                                      return <span key={`a${index}`}>{item.ability.name}</span>;
                                                })}
                                          </div>
                                    </div>
                              </div>
                              <h2 className="stats_title">Stast</h2>
                              <div className="stats_item">
                                    <h3>HP:</h3>
                                    <p>{pokemon?.stats[0].base_stat}</p>
                                    <div className="bar">
                                          <div className="unit" style={{ width: `${pokemon?.stats[0].base_stat}%` }}></div>
                                    </div>
                                    <h3>Attack:</h3>
                                    <p>{pokemon?.stats[1].base_stat}</p>
                                    <div className="bar">
                                          <div className="unit" style={{ width: `${pokemon?.stats[1].base_stat}%` }}></div>
                                    </div>
                                    <h3>Defense:</h3>
                                    <p>{pokemon?.stats[2].base_stat}</p>
                                    <div className="bar">
                                          <div className="unit" style={{ width: `${pokemon?.stats[2].base_stat}%` }}></div>
                                    </div>
                                    <h3>Speed:</h3>
                                    <p>{pokemon?.stats[5].base_stat}</p>
                                    <div className="bar">
                                          <div className="unit" style={{ width: `${pokemon?.stats[5].base_stat}%` }}></div>
                                    </div>
                              </div>
                        </div>
                        <div className="movements">
                              <h2>Movements</h2>
                              <div className="movements_item">
                                    {pokemon?.moves.map((item, index) => {
                                          return <span key={`m${index}`}>{item.move.name}</span>;
                                    })}
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PokemonDetails;
