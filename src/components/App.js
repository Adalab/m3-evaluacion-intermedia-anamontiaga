import React from "react";
import "../stylesheets/scss/App.scss";
import Pokelist from "./Pokelist";
// import dataPokemons from "../data/data";
import getDataFromServer from "../services/ReasonsService";

class App extends React.Component {
  constructor() {
    super();
    // initial state
    this.state = {
      pokemons: [],
      favs: [],
      filteredText: ""
      // el valor del texto que pinto en el input
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.selectFavorite = this.selectFavorite.bind(this);
    // get data and set in react state
    getDataFromServer().then(pokemons => {
      this.setState({ pokemons });
    });
  }

  handleFilter(ev) {
    this.setState({ filteredText: ev.target.value });
  }

  selectFavorite(event) {
    const selectPokemon = event.currentTarget.id;
    this.setState({ favs: this.state.favs.push(selectPokemon) });
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.includes(this.state.filteredText);
    });

    return (
      <div className="App">
        <label htmlFor="filter">Filtrar:</label>
        <input type="text" onChange={this.handleFilter} />
        <h1 className="title">Mi lista de Pokemon</h1>
        <Pokelist cards={filteredPokemons} actionToPerformOnPokelist={this.selectFavorite} />
      </div>
    );
  }
}

export default App;
