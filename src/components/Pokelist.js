import React from "react";
import "../stylesheets/scss/Pokelist.scss";
import Pokemon from "./Pokemon.js";

const Pokelist = props => {
  return (
    <ul className="pokemons--list">
      {" "}
      {props.cards.map((card, cardIndex) => (
        <Pokemon url={card.url} name={card.name} types={card.types} cardIndex={cardIndex} />
      ))}
    </ul>
  );
};

export default Pokelist;
