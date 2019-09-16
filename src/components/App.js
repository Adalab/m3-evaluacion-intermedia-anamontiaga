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
      pokemons: []
    };
    // get data and set in react state
    getDataFromServer().then(pokemons => {
      this.setState({ pokemons });
      console.log(this.state);
    });
  }

  render() {
    console.log("Rendering...");

    return (
      <div className="App">
        <h1 className="title">Mi lista de Pokemon</h1>
        <Pokelist cards={this.state.pokemons} />
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemons: dataPokemons
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1 className="title">Mi lista de Pokemon</h1>
//         <Pokelist cards={this.state.pokemons} />
//       </div>
//     );
//   }
// }

export default App;
