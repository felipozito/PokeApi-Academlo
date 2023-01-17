import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectType = ({ setOptionType }) => {
      const url = `https://pokeapi.co/api/v2/type`;
      const [listType, setListType] = useState();
      useEffect(() => {
            axios.get(url)
                  .then((res) => setListType(res.data.results))
                  .catch((err) => console.log(err));
      }, []);
      return (
            <select
                  className="search"
                  onChange={(e) => {
                        setOptionType(e.target.value);
                  }}
            >
                  <option value="All">All pokemons</option>
                  {listType?.map((type) => {
                        return (
                              <option value={type.name} key={type.name}>
                                    {type.name}
                              </option>
                        );
                  })}
            </select>
      );
};

export default SelectType;
