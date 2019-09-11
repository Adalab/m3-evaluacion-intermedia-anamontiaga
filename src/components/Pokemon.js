import React from "react";
import "../index.css";

const Pokemon = props => {
  return (
    <li className="pokemon">
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      {props.types.map(type => {
        return <button>{type}</button>;
      })}
    </li>
  );
};

export default Pokemon;
