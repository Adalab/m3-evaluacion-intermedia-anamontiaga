import React from "react";
import "../stylesheets/scss/Pokemon.scss";

const pokemonTypes = props => {
  return props.types.map(type => {
    return <li className="pokemon--type">{type}</li>;
  });
};

const Pokemon = props => {
  return (
    <li className="pokemon">
      <img className="pokemon--img" src={props.url} alt={props.name} />
      <h2 className="pokemon--title">{props.name}</h2>
      <div className="pokemon--btns">
        <ul className="pokemon--types--list">{pokemonTypes(props)}</ul>
      </div>
    </li>
  );
};

export default Pokemon;
