import React from "react";
import "../stylesheets/scss/Pokemon.scss";

const pokemonTypes = props => {
  return props.types.map((type, typeIndex) => {
    return (
      <li className="pokemon--type" key={`type${typeIndex}`} id={`type${typeIndex}`}>
        {type}
      </li>
    );
  });
};

// SUBIR SOLO EL ID. VER REPO MIGUEL ( LO HACE CON CONSTANTE PARA MANTENER EL DUMMY). SACAR A UNA FUNCIÓN EN HIJO Y NIETO LO QUE QUIERO PASAR

const Pokemon = props => {
  // const className = props.pokemon.fav === true ? "red" : "pokemon";
  return (
    <li className="pokemon" key={`card${props.cardIndex}`} id={`card${props.cardIndex}`} onClick={props.actionToPerform}>
      <img className="pokemon--img" src={props.url} alt={props.name} />
      <h2 className="pokemon--title">{props.name}</h2>
      <div className="pokemon--btns">
        <ul className="pokemon--types--list">{pokemonTypes(props)}</ul>
      </div>
    </li>
  );
};

export default Pokemon;
