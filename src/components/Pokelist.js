import React from "react";
import "../index.css";
import Pokemon from "./Pokemon";

const Pokelist = props => {
  return (
    <ul className="pokemons--list">
      {props.cards.map((card, cardIndex) => (
        <Pokemon url={card.url} name={card.name} types={card.types} />
      ))}
    </ul>
  );
};

export default Pokelist;
