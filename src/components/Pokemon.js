import React from "react";
import "../stylesheets/scss/Pokemon.scss";

const Pokemon = props => {
  return (
    <li className="pokemon">
      <img className="pokemon--img" src={props.url} alt={props.name} />
      <h2 className="pokemon--title">{props.name}</h2>
      <div className="pokemon--btns">
        {props.types.map(type => {
          return <button className="pokemon--btn">{type}</button>;
        })}
      </div>
    </li>
  );
};

export default Pokemon;
