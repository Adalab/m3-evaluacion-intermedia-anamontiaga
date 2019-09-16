const getDataFromServer = () => {
  return fetch("./data.json")
    .then(response => response.json())
    .then(pokemons => {
      return pokemons.map(pokemon => {
        return {
          name: pokemon.name,
          url: pokemon.url,
          types: pokemon.types
        };
      });
    });
};

export default getDataFromServer;
