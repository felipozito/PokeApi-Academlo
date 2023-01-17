import React from "react";
import "../../styles/pokemoCard.css";
const StatPokemon = ({ infoStat }) => {
      return (
            <div className="item">
                  <p>
                        {infoStat.stat.name}:<span> {infoStat.base_stat}</span>
                  </p>
            </div>
      );
};

export default StatPokemon;
